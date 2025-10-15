// Import thư viện Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho Account
export interface Account {
  id: number; // ID duy nhất
  name: string; // Tên tài khoản
  likes: number; // Số lượt thích
  isFavorite: boolean; // Có phải yêu thích không
}

// Dữ liệu ban đầu - danh sách các tài khoản
const initialState: Account[] = [
  { id: 1, name: "Vỹ", likes: 3, isFavorite: false },
  { id: 2, name: "Linh", likes: 1, isFavorite: true },
  { id: 3, name: "Khoa", likes: 0, isFavorite: false },
];

// Tạo slice cho quản lý tài khoản
const accountSlice = createSlice({
  name: "accounts", // Tên slice
  initialState, // Dữ liệu ban đầu
  reducers: {
    // Action để bật/tắt yêu thích
    toggleFavorite: (state, action: PayloadAction<number>) => {
      // Tìm tài khoản theo ID
      const account = state.find((acc) => acc.id === action.payload);
      if (account) {
        // Đảo ngược trạng thái yêu thích
        account.isFavorite = !account.isFavorite;
        // Tăng/giảm số lượt thích
        account.likes += account.isFavorite ? 1 : -1;
      }
    },
  },
});

// Export actions và reducer
export const { toggleFavorite } = accountSlice.actions;
export default accountSlice.reducer;
