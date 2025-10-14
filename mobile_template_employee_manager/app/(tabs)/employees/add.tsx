import { Stack } from "expo-router";
import React from "react";
import { Alert } from "react-native";
import EmployeeForm from "@/components/EmployeeForm";
import { createEmployee } from "@/apis/employee.api";
import { router } from "expo-router";

export default function AddEmployeeScreen() {
  const handleSubmit = async (data: any) => {
    try {
      await createEmployee(data);
      Alert.alert("Thành công", "Đã thêm nhân viên mới!", [
        {
          text: "OK",
          onPress: () => router.back(), // quay lại danh sách
        },
      ]);
    } catch (error: any) {
      Alert.alert("Lỗi", error.response?.data?.message || "Không thể thêm nhân viên, vui lòng thử lại.");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Thêm nhân viên" }} />
      <EmployeeForm onSubmit={handleSubmit} />
    </>
  );
}
