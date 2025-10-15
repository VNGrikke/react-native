// Import thư viện Redux Toolkit để tạo store
import { configureStore } from "@reduxjs/toolkit";

// Import các slice
import accountSlice from "../slice/account.slice";
import counterSlice from "../slice/counter.slice";
import languageSlice from "../slice/language.slice";
import positionSlice from "../slice/position.slice";
import randomSlice from "../slice/random.slice";
import viewModeSlice from "../slice/view-mode.slice";

// Tạo Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice, // Quản lý counter
    random: randomSlice, // Quản lý random data
    viewMode: viewModeSlice, // Quản lý chế độ hiển thị
    accounts: accountSlice, // Quản lý danh sách tài khoản
    language: languageSlice, // Quản lý ngôn ngữ
    position: positionSlice, // Quản lý vị trí công việc
  },
});

// Export store
export default store;

// Export types để sử dụng trong TypeScript
export type RootState = ReturnType<typeof store.getState>; // Type cho state
export type AppDispatch = typeof store.dispatch; // Type cho dispatch