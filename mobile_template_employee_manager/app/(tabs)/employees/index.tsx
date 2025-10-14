import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React, { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Employee } from "@/data/mockData";
import { searchEmployees, deleteEmployee } from "@/apis/employee.api";

export default function EmployeeListScreen() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchEmployees = useCallback(async (pageNumber: number = 1) => {
    try {
      if (pageNumber === 1) setLoading(true);
      else setLoadingMore(true);

      const res = await searchEmployees({ page: pageNumber, size: 10 });

      if (pageNumber === 1) setEmployees(res.content);
      else setEmployees((prev) => [...prev, ...res.content]);

      setTotalPages(res.totalPages);
    } catch (error) {
      Alert.alert("Lỗi", "Không thể tải danh sách nhân viên.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees(1);
  }, [fetchEmployees]);

  const loadMore = () => {
    if (!loadingMore && page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchEmployees(nextPage);
    }
  };

  const handleDeleteEmployee = (employee: Employee) => {
    Alert.alert(
      "Xác nhận xóa",
      `Bạn có chắc chắn muốn xóa nhân viên "${employee.employeeName}"?`,
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xóa",
          style: "destructive",
          onPress: async () => {
            setDeletingId(employee.id);
            try {
              await deleteEmployee(employee.id.toString());
              Alert.alert("Thành công", "Đã xóa nhân viên thành công!");
              fetchEmployees(1);
            } catch (error: any) {
              Alert.alert(
                "Lỗi",
                error.response?.data?.message || "Không thể xóa nhân viên."
              );
            } finally {
              setDeletingId(null);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Danh sách Nhân viên",
          headerRight: () => (
            <Link href="/employees/add" asChild>
              <TouchableOpacity>
                <Ionicons name="add-circle" size={32} color="tomato" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="tomato"
          style={{ marginTop: 40 }}
        />
      ) : employees.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Không có dữ liệu nhân viên.</Text>
        </View>
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator
                size="small"
                color="tomato"
                style={{ marginVertical: 10 }}
              />
            ) : null
          }
          renderItem={({ item }: { item: Employee }) => (
            <Link
              href={{
                pathname: "/employees/[id]",
                params: { id: item.id.toString() },
              }}
              asChild
            >
              <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>
                    {item.employeeName} ({item.employeeCode})
                  </Text>
                  <Text style={styles.itemPosition}>{item.positionName}</Text>
                </View>
                <View style={styles.itemActions}>
                  <Link
                    href={{
                      pathname: "/employees/edit/[id]",
                      params: { id: item.id.toString() },
                    }}
                    asChild
                  >
                    <TouchableOpacity>
                      <Ionicons name="pencil" size={24} color="#007AFF" />
                    </TouchableOpacity>
                  </Link>
                  <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={() => handleDeleteEmployee(item)}
                    disabled={deletingId === item.id}
                  >
                    <Ionicons
                      name="trash"
                      size={24}
                      color={deletingId === item.id ? "#ccc" : "#FF3B30"}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Link>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: "bold" },
  itemPosition: { fontSize: 14, color: "gray", marginTop: 4 },
  itemActions: { flexDirection: "row", alignItems: "center" },
});
