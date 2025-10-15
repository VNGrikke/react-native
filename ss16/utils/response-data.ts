// Định nghĩa kiểu dữ liệu cho response từ API

// Response trả về danh sách dữ liệu
export interface BaseResponse<T> {
  data: T[]; // Mảng dữ liệu
  message: string; // Thông báo từ server
  statusCode: number; // Mã trạng thái HTTP
  success?: boolean; // Trạng thái thành công
}

// Response trả về một item duy nhất
export interface SingleResponse<T> {
  data: T; // Dữ liệu duy nhất
  message: string; // Thông báo từ server
  statusCode: number; // Mã trạng thái HTTP
  success?: boolean; // Trạng thái thành công
}

// Response có phân trang
export interface PaginatedResponse<T> extends BaseResponse<T> {
  meta: {
    totalRecords: number; // Tổng số bản ghi
    currentPage: number; // Trang hiện tại
    pageSize: number; // Số item mỗi trang
    totalPages: number; // Tổng số trang
  };
}

// Response khi có lỗi
export interface ErrorResponse {
  message: string; // Thông báo lỗi
  error: string; // Chi tiết lỗi
  statusCode: number; // Mã lỗi
  success?: false; // Luôn là false
}