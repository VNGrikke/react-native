// Import thư viện Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Định nghĩa các ngôn ngữ hỗ trợ
export type Language = "en" | "vi";

// Định nghĩa state cho language
interface LanguageState {
  current: Language; // Ngôn ngữ hiện tại
}

// Giá trị ban đầu - mặc định là tiếng Anh
const initialState: LanguageState = {
  current: "en",
};

// Tạo slice cho quản lý ngôn ngữ
const languageSlice = createSlice({
  name: "language", // Tên slice
  initialState, // State ban đầu
  reducers: {
    // Action để chuyển đổi ngôn ngữ
    toggleLanguage: (state) => {
      state.current = state.current === "en" ? "vi" : "en";
    },
    // Action để set ngôn ngữ cụ thể
    setLanguage: (state, action: { payload: Language }) => {
      state.current = action.payload;
    },
  },
});

// Export actions và reducer
export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
