import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
}

const allPosts: Post[] = [
  { id: "1", title: "React Native là gì?", author: "John Doe", date: "2021-09-01" },
  { id: "2", title: "Làm quen với Redux", author: "Jane Smith", date: "2021-09-05" },
  { id: "3", title: "Giới thiệu về JavaScript", author: "Alice Johnson", date: "2021-09-10" },
  { id: "4", title: "Hướng dẫn CSS Flexbox", author: "Bob Brown", date: "2021-09-12" },
  { id: "5", title: "Học lập trình web từ đâu?", author: "Charlie Davis", date: "2021-09-15" },
  { id: "6", title: "Hiểu về TypeScript", author: "David Wilson", date: "2021-09-18" },
  { id: "7", title: "Khai thác API RESTful", author: "Emma White", date: "2021-09-20" },
  { id: "8", title: "Giới thiệu về GraphQL", author: "Olivia Lee", date: "2021-09-22" },
  { id: "9", title: "Node.js cơ bản", author: "James King", date: "2021-09-25" },
  { id: "10", title: "Express.js cho người mới", author: "Sophia Hall", date: "2021-09-27" },
  { id: "11", title: "React Hooks toàn tập", author: "Liam Young", date: "2021-09-30" },
  { id: "12", title: "Vue.js và React so sánh", author: "Mia Scott", date: "2021-10-02" },
  { id: "13", title: "Angular từ cơ bản đến nâng cao", author: "Lucas Wright", date: "2021-10-04" },
  { id: "14", title: "Sử dụng Firebase trong React Native", author: "Ella Green", date: "2021-10-06" },
  { id: "15", title: "Triển khai ứng dụng lên Heroku", author: "Noah Adams", date: "2021-10-08" },
];

const PAGE_SIZE = 5;

export default function BlogListScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const nextPageData = allPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
      setPosts((prev) => [...prev, ...nextPageData]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 1000);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Danh sách bài viết</Text>
      <Text style={styles.headerCount}>Số lượng bài viết: {posts.length}</Text>
    </View>
  );

  const renderFooter = () =>
    loading ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={styles.footerText}>Đang tải thêm...</Text>
      </View>
    ) : null;

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>Tác giả: {item.author}</Text>
      <Text style={styles.date}>Ngày đăng: {item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  headerCount: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "green",
    marginBottom: 3,
  },
  date: {
    fontSize: 13,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginTop: 10,
  },
  footerText: {
    color: "#fff",
    marginLeft: 8,
  },
});
