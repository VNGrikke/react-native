// Import thư viện Axios để xử lý lỗi HTTP
import { AxiosError } from "axios";

// Định nghĩa kiểu dữ liệu cho lỗi từ API
export interface ApiErrorResponse {
  message: string; // Thông báo lỗi
  error: string; // Chi tiết lỗi
  statusCode: number; // Mã lỗi HTTP
  success?: false; // Luôn là false khi có lỗi
}

// Định nghĩa lỗi validation
export interface ValidationError {
  field: string; // Tên trường bị lỗi
  message: string; // Thông báo lỗi cho trường đó
}

// Định nghĩa lỗi chi tiết hơn
export interface DetailedErrorResponse extends ApiErrorResponse {
  validationErrors?: ValidationError[]; // Danh sách lỗi validation
  timestamp?: string; // Thời gian xảy ra lỗi
  path?: string; // Đường dẫn API bị lỗi
}

// Hàm lấy thông báo lỗi từ bất kỳ loại lỗi nào
export const extractErrorMessage = (error: unknown): string => {
  // Nếu là Error object
  if (error instanceof Error) {
    return error.message;
  }
  
  // Nếu là string
  if (typeof error === "string") {
    return error;
  }
  
  // Nếu là object có thuộc tính message
  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }
  
  // Trả về thông báo mặc định
  return "Đã xảy ra lỗi không mong muốn";
};

// Kiểm tra xem có phải là lỗi Axios không
export const isAxiosError = (error: unknown): error is AxiosError<ApiErrorResponse> => {
  return error instanceof Error && "isAxiosError" in error && error.isAxiosError;
};

// Hàm lấy thông báo lỗi từ Axios error
export const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    // Ưu tiên lấy message từ response.data, nếu không có thì lấy từ error.message
    return error.response?.data?.message || error.message;
  }
  
  // Nếu không phải Axios error thì dùng hàm extractErrorMessage
  return extractErrorMessage(error);
};
