import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { router } from "expo-router";

const BASE_URL = "https://nest-api-public.ixe-agent.io.vn/api/v1/";

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await AsyncStorage.getItem("ACCESS_TOKEN");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let queue: ((token: string | null) => void)[] = [];

const refreshToken = async (): Promise<string> => {
  const token = await AsyncStorage.getItem("REFRESH_TOKEN");
  if (!token) {
    throw new Error("No refresh token available");
  }
  
  try {
    const response: AxiosResponse<{ data: RefreshTokenResponse }> = await axios.post(
      `${BASE_URL}/auths/refresh-token`,
      { refreshToken: token }
    );
    
    const { accessToken, refreshToken: newToken } = response.data.data;
    
    await AsyncStorage.multiSet([
      ["ACCESS_TOKEN", accessToken],
      ["REFRESH_TOKEN", newToken],
    ]);
    
    axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    return accessToken;
  } catch (error) {
    throw new Error("Failed to refresh token");
  }
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }
    
    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        queue.push((token) => {
          if (token && originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          } else {
            reject(error);
          }
        });
      });
    }

    isRefreshing = true;
    
    try {
      const newToken = await refreshToken();
      queue.forEach((callback) => callback(newToken));
      queue = [];
      
      if (originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
      }
      
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      queue.forEach((callback) => callback(null));
      queue = [];
      
      await AsyncStorage.multiRemove([
        "ACCESS_TOKEN", 
        "REFRESH_TOKEN", 
        "USER"
      ]);
      
      router.replace("/login");
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);
