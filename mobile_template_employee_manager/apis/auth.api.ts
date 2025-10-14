import { axiosInstance } from "@/utils/axios-intance";
import { LoginRequest } from "@/data/mockData";

export interface SignUpRequest {
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  deviceId: string;
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: number;
    phoneNumber: string;
    fullName: string;
    email?: string;
  };
}

export const signIn = async (loginRequest: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post("/auths/login", loginRequest);
    
    if (response.data.statusCode === 200) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Đăng nhập thất bại");
    }
  } catch (error: any) {
    console.error("Lỗi đăng nhập:", error);
    throw new Error(
      error.response?.data?.message || 
      "Không thể đăng nhập. Kiểm tra kết nối hoặc server."
    );
  }
};

export const signUp = async (signUpRequest: SignUpRequest): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post("/auths/register", signUpRequest);
    
    if (response.data.statusCode === 200 || response.data.statusCode === 201) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Đăng ký thất bại");
    }
  } catch (error: any) {
    console.error("Lỗi đăng ký:", error);
    throw new Error(
      error.response?.data?.message || 
      "Không thể đăng ký. Kiểm tra kết nối hoặc server."
    );
  }
};

export const signOut = async () => {
  try {
    // Gọi API logout nếu cần
    // await axiosInstance.post("/auths/logout");
    
    // Xóa token và user data khỏi AsyncStorage
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    await AsyncStorage.multiRemove(["ACCESS_TOKEN", "USER"]);
  } catch (error) {
    console.error("Lỗi đăng xuất:", error);
    // Vẫn xóa data local ngay cả khi API fail
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    await AsyncStorage.multiRemove(["ACCESS_TOKEN", "USER"]);
  }
};
