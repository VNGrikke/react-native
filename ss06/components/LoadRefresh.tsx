import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

interface Item {
  id: string;
  name: string;
}

// Dữ liệu giả lập ban đầu
const initialData: Item[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Samuel Johnson" },
  { id: "4", name: "Emily Davis" },
  { id: "5", name: "Michael Brown" },
];

// Tạo thêm dữ liệu giả
const generateMoreData = (startId: number, count: number = 5): Item[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${startId + i}`,
    name: `User ${startId + i}`,
  }));
};

export default function LoadRefresh() {
  const [data, setData] = useState<Item[]>(initialData);
  const [refreshing, setRefreshing] = useState(false);

  // Làm mới dữ liệu
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // Reset lại dữ liệu ban đầu
      setData(initialData);
      setRefreshing(false);
    }, 1000);
  }, []);

  // Load thêm dữ liệu
  const loadMore = () => {
    const lastId = parseInt(data[data.length - 1].id, 10);
    const newData = generateMoreData(lastId + 1, 5);
    setData((prev) => [...prev, ...newData]);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={loadMore}>
        <Text style={styles.buttonText}>TẢI THÊM</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  footer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
