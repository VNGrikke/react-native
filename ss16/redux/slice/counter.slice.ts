import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number; 
}

// Giá trị ban đầu của state
const initialState: CounterState = {
  value: 0, // Bắt đầu từ 0
};

// Tạo slice cho counter
const counterSlice = createSlice({
  name: "counter", // Tên của slice
  initialState, // State ban đầu
  reducers: {
    // Action để tăng counter lên 1
    increase: (state) => {
      state.value += 1;
    },
    // Action để giảm counter xuống 1
    decrease: (state) => {
      state.value -= 1;
    },
    // Action để tăng counter theo số lượng tùy chỉnh
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // action.payload là số lượng cần tăng
    },
    // Action để reset counter về 0
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export reducer để đưa vào store
export default counterSlice.reducer;
// Export các action để sử dụng trong component
export const { increase, decrease, incrementByAmount, reset } = counterSlice.actions;
