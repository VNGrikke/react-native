import { useLocalSearchParams, Stack, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator, View, StyleSheet } from "react-native";
import EmployeeForm from "@/components/EmployeeForm";
import { updateEmployee } from "@/apis/employee.api";
import { Employee } from "@/data/mockData";
import { axiosInstance } from "@/utils/axios-intance";

export default function EditEmployeeScreen() {
  const { id } = useLocalSearchParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchEmployeeDetail(id as string);
    }
  }, [id]);

  const fetchEmployeeDetail = async (employeeId: string) => {
    try {
      const response = await axiosInstance.get(`/employees/${employeeId}`);
      setEmployee(response.data.data || response.data);
    } catch (error) {
      console.error("Error fetching employee detail:", error);
      Alert.alert("Lỗi", "Không thể tải thông tin nhân viên.");
      router.back();
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any) => {
    if (!id) {
      Alert.alert("Lỗi", "Không tìm thấy ID nhân viên.");
      return;
    }

    try {
      await updateEmployee(id as string, data);
      Alert.alert("Thành công", "Cập nhật thông tin nhân viên thành công!");
      router.back();
    } catch (error: any) {
      Alert.alert("Lỗi", error.response?.data?.message || "Không thể cập nhật thông tin nhân viên.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Stack.Screen options={{ headerShown: true, title: "Chỉnh sửa nhân viên" }} />
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  if (!employee) {
    return (
      <View style={styles.loadingContainer}>
        <Stack.Screen options={{ headerShown: true, title: "Chỉnh sửa nhân viên" }} />
        <Alert.alert("Lỗi", "Không tìm thấy thông tin nhân viên");
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Chỉnh sửa nhân viên" }} />
      <EmployeeForm initialData={employee} onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});