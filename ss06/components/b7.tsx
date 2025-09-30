import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "React Native là gì?",
    price: 0,
    description: "Tìm hiểu về React Native.",
    details: "Ngày đăng: 2021-09-01",
  },
  {
    id: "2",
    name: "Làm quen với Redux",
    price: 0,
    description: "Học cách quản lý state với Redux.",
    details: "Ngày đăng: 2021-09-05",
  },
  {
    id: "3",
    name: "Giới thiệu về JavaScript",
    price: 0,
    description: "Ngôn ngữ lập trình phổ biến.",
    details: "Ngày đăng: 2021-09-10",
  },
  {
    id: "4",
    name: "Hướng dẫn CSS Flexbox",
    price: 0,
    description: "Cách sử dụng Flexbox để layout.",
    details: "Ngày đăng: 2021-09-12",
  },
  {
    id: "5",
    name: "Học lập trình web từ đâu?",
    price: 0,
    description: "Lộ trình học lập trình web cho người mới.",
    details: "Ngày đăng: 2021-09-15",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Header
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
      <Text style={styles.headerSubtitle}>
        Số lượng sản phẩm: {products.length}
      </Text>
    </View>
  );

  // Item
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>
        {item.price > 0 ? `${item.price} VND` : ""}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.details}>{item.details}</Text>
    </View>
  );

  // Footer (loading more)
  const renderFooter = () =>
    loadingMore ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#4CAF50" />
        <Text style={styles.footerText}> Đang tải thêm...</Text>
      </View>
    ) : null;

  // Load more
  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        const moreProducts = [
          {
            id: (products.length + 1).toString(),
            name: "Sản phẩm mới " + (products.length + 1),
            price: 1000,
            description: "Mô tả sản phẩm mới.",
            details: `Ngày đăng: 2021-09-${products.length + 1}`,
          },
        ];
        setProducts([...products, ...moreProducts]);
        setLoadingMore(false);
      }, 1500);
    }
  };

  // Refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setProducts(initialProducts); // reset lại data ban đầu
      setRefreshing(false);
    }, 1500);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "#4CAF50",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#f0f0f0",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2,
  },
  details: {
    fontSize: 12,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  footerText: {
    color: "#4CAF50",
    marginLeft: 8,
  },
});

export default ProductList;
