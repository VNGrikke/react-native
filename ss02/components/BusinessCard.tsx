import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function BusinessCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" }} 
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.description}>
        Lập trình viên React Native | Yêu thích công nghệ và du lịch
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    // Đổ bóng (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Đổ bóng (Android)
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
