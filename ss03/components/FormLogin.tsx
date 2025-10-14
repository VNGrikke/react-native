import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING, CONTAINER_STYLES } from "../styles/GlobalStyles";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={CONTAINER_STYLES.fullScreenCenter}>
      {/* Logo */}
      <Image 
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
        style={styles.logo} 
      />

      {/* Ô nhập tên đăng nhập */}
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />

      {/* Ô nhập mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Nút đăng nhập */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 110,
    marginBottom: SPACING.lg,
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    fontSize: FONT_SIZES.medium,
    marginBottom: SPACING.md,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.sm,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
});
