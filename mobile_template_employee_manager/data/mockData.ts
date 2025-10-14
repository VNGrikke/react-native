export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface Position {
  id: number;
  positionName: string;
}

export interface LoginRequest {
  phoneNumber: string;
  password: string;
  deviceId: string;
  isRemembered: boolean;
}
export interface Employee {
  id: number;
  employeeCode: string;
  employeeName: string;
  phoneNumber: string;
  gender: Gender;
  dateBirth: string; // YYYY-MM-DD
  createdAt: string; // ISO Date String
  positionId: number;
  positionName: string;
}

// Danh sách vị trí công việc fix cứng
export const DUMMY_POSITIONS: Position[] = [
  { id: 1, positionName: "Nhân viên bán hàng" },
  { id: 2, positionName: "Kế toán" },
  { id: 3, positionName: "Quản lý kho" },
  { id: 4, positionName: "Lập trình viên" },
];
