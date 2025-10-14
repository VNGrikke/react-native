import { useLocalSearchParams, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
  Alert 
} from "react-native";
import { Employee, Gender } from "@/data/mockData";
import { axiosInstance } from "@/utils/axios-intance";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function EmployeeDetailScreen() {
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
    } finally {
      setLoading(false);
    }
  };

  const formatGender = (gender: Gender) => {
    return gender === Gender.MALE ? "Nam" : "Nữ";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Stack.Screen options={{ headerShown: true, title: "Chi tiết nhân viên" }} />
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  if (!employee) {
    return (
      <View style={styles.errorContainer}>
        <Stack.Screen options={{ headerShown: true, title: "Chi tiết nhân viên" }} />
        <Text style={styles.errorText}>Không tìm thấy thông tin nhân viên</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Chi tiết nhân viên" }} />
      <View style={styles.card}>
        <InfoRow label="Mã nhân viên" value={employee.employeeCode} />
        <InfoRow label="Họ và tên" value={employee.employeeName} />
        <InfoRow label="Số điện thoại" value={employee.phoneNumber} />
        <InfoRow label="Giới tính" value={formatGender(employee.gender)} />
        <InfoRow label="Ngày sinh" value={formatDate(employee.dateBirth)} />
        <InfoRow label="Vị trí" value={employee.positionName} />
        <InfoRow
          label="Ngày tạo"
          value={formatDate(employee.createdAt)}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 15 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  card: { 
    backgroundColor: "white", 
    borderRadius: 10, 
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: { 
    fontSize: 16, 
    color: "#666", 
    fontWeight: "500",
    flex: 1,
  },
  value: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
});
