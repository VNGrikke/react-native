import { decrease, increase, incrementByAmount, reset } from "@/redux/slice/counter.slice";
import { RootState } from "@/redux/store";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  
  // Lấy hàm dispatch để gửi action
  const dispatch = useDispatch();
  
  // Hàm xử lý khi nhấn nút tăng
  const handleIncrease = () => {
    dispatch(increase()); // Gửi action increase
  };
  
  // Hàm xử lý khi nhấn nút giảm
  const handleDecrease = () => {
    dispatch(decrease()); // Gửi action decrease
  };

  // Hàm xử lý khi nhấn nút reset
  const handleReset = () => {
    dispatch(reset()); // Gửi action reset
  };

  // Hàm xử lý khi nhấn nút tăng 5
  const handleIncrementByFive = () => {
    dispatch(incrementByAmount(5)); // Gửi action với payload là 5
  };
  
  return (
    <View style={styles.container}>
      {/* Hiển thị giá trị counter */}
      <Text style={styles.title}>{counterValue}</Text>
      
      {/* Container chứa các nút tăng/giảm */}
      <View style={styles.buttonContainer}>
        <Button title="Tăng" onPress={handleIncrease} />
        <Button title="Giảm" onPress={handleDecrease} />
        <Button title="+5" onPress={handleIncrementByFive} />
      </View>
      
      {/* Nút reset */}
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 120,
    fontWeight: "bold",
    margin: 20,
  },
  buttonContainer: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
