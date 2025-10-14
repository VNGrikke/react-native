import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

let isLoggingOut = false;

export const axiosInstance = axios.create({
  baseURL: "https://nest-api-public.ixe-agent.io.vn/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Gắn token vào header
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Tự động đăng xuất khi token hết hạn
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isLoggingOut
    ) {
      originalRequest._retry = true;
      isLoggingOut = true;

      console.warn("⚠️ Token hết hạn — tự động đăng xuất");
      await AsyncStorage.multiRemove(["ACCESS_TOKEN", "USER"]);

      // Tránh race condition
      setTimeout(() => {
        router.replace("/(auth)/sign-in");
        isLoggingOut = false;
      }, 0);
    }
    return Promise.reject(error);
  }
);
