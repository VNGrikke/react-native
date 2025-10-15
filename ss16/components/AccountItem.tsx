// Import các thư viện cần thiết
import { Account, toggleFavorite } from "@/redux/slice/account.slice";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

// Định nghĩa props cho component
interface Props {
  account: Account; // Thông tin tài khoản
}

// Component hiển thị thông tin một tài khoản
export default function AccountItem({ account }: Props) {
  // Lấy hàm dispatch để gửi action
  const dispatch = useDispatch();

  // Hàm xử lý khi nhấn vào icon tim
  const handleToggle = () => {
    dispatch(toggleFavorite(account.id)); // Gửi action toggle favorite
  };

  return (
    <View style={styles.card}>
      {/* Container chứa thông tin tài khoản */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{account.name}</Text>
        <Text style={styles.likes}>❤️ {account.likes} lượt thích</Text>
      </View>

      {/* Nút tim để toggle favorite */}
      <TouchableOpacity 
        onPress={handleToggle}
        style={styles.favoriteButton}
      >
        <FontAwesome
          name={account.isFavorite ? "heart" : "heart-o"}
          size={24}
          color={account.isFavorite ? "#E53E3E" : "#A0AEC0"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    color: "#2D3748",
    marginBottom: 4,
  },
  likes: {
    color: "#718096",
    fontSize: 14,
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 8,
  },
});
