import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // regex đơn giản kiểm tra email
  const validateEmail = (email: string) =>
    /\S+@\S+\.\S+/.test(email);

  const handleBlur = (field: string) => {
    let message = "";

    switch (field) {
      case "email":
        if (!form.email) message = "Email không được bỏ trống";
        else if (!validateEmail(form.email))
          message = "Email không hợp lệ";
        break;

      case "password":
        if (form.password.length < 6)
          message = "Mật khẩu phải dài ít nhất 6 ký tự";
        break;

      case "confirmPassword":
        if (form.confirmPassword !== form.password)
          message = "Mật khẩu xác nhận không khớp";
        break;

      case "name":
        if (!form.name.trim()) message = "Tên không được bỏ trống";
        break;
    }

    setErrors({ ...errors, [field]: message });
  };

  const isFormValid =
    form.name &&
    validateEmail(form.email) &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword;

  const handleRegister = () => {
    Alert.alert("Đăng ký thành công", JSON.stringify(form, null, 2));
  };

  return (
    <View style={styles.container}>
      {/* Tên */}
      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        onBlur={() => handleBlur("name")}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        onBlur={() => handleBlur("email")}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      {/* Mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        onBlur={() => handleBlur("password")}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      {/* Xác nhận mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
        onBlur={() => handleBlur("confirmPassword")}
      />
      {errors.confirmPassword ? (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      ) : null}

      {/* Nút đăng ký */}
      <TouchableOpacity
        style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  error: {
    color: "#DC2626",
    marginBottom: 8,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
