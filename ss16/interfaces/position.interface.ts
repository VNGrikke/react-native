// Import enum trạng thái vị trí
import { PositionStatus } from "@/enums/position.enum";

// Interface cho request tạo/sửa vị trí
export interface PositionRequest {
  positionName: string; // Tên vị trí
  positionStatus: PositionStatus; // Trạng thái (ACTIVE/INACTIVE)
  description?: string; // Mô tả (không bắt buộc)
}

// Interface cho dữ liệu vị trí từ server
export interface Position {
  id: number; // ID duy nhất
  positionName: string; // Tên vị trí
  description: string; // Mô tả
  positionStatus: PositionStatus; // Trạng thái
  createdAt: string; // Thời gian tạo
}
