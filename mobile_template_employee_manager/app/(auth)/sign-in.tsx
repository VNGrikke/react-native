import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "@/apis/auth.api";

export default function SignInScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginRequest, setLoginRequest] = useState({
    phoneNumber: "",
    password: "",
    deviceId: String(uuid.v4()),
    isRemembered: false,
  });

  const validateLoginRequest = () => {
    if (!loginRequest.phoneNumber.trim() || !loginRequest.password.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ số điện thoại và mật khẩu");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateLoginRequest()) return;

    setLoading(true);
    try {
      const response = await signIn(loginRequest);
      const { accessToken, user } = response;

      await AsyncStorage.setItem("ACCESS_TOKEN", accessToken);
      await AsyncStorage.setItem("USER", JSON.stringify(user));

      Alert.alert("Thành công", "Đăng nhập thành công!");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Lỗi", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={loginRequest.phoneNumber}
        onChangeText={(text) =>
          setLoginRequest({ ...loginRequest, phoneNumber: text })
        }
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={loginRequest.password}
        onChangeText={(text) =>
          setLoginRequest({ ...loginRequest, password: text })
        }
        secureTextEntry
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Đăng nhập</Text>
        )}
      </TouchableOpacity>

      <Link href="/(auth)/sign-up" asChild>
        <TouchableOpacity>
          <Text style={styles.linkText}>Chưa có tài khoản? Đăng ký</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 24,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333"
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9"
  },
  button: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  linkText: { 
    marginTop: 20, 
    textAlign: "center", 
    color: "tomato",
    fontSize: 16
  },
});
