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
import { signUp, SignUpRequest } from "@/apis/auth.api";

export default function SignUpScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signUpRequest, setSignUpRequest] = useState<SignUpRequest>({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    deviceId: String(uuid.v4()),
  });

  const validateSignUpRequest = () => {
    if (!signUpRequest.fullName.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập họ và tên");
      return false;
    }
    if (!signUpRequest.phoneNumber.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập số điện thoại");
      return false;
    }
    if (!signUpRequest.password.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập mật khẩu");
      return false;
    }
    if (signUpRequest.password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    if (signUpRequest.password !== signUpRequest.confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateSignUpRequest()) return;

    setLoading(true);
    try {
      const response = await signUp(signUpRequest);
      const { accessToken, user } = response;

      await AsyncStorage.setItem("ACCESS_TOKEN", accessToken);
      await AsyncStorage.setItem("USER", JSON.stringify(user));

      Alert.alert("Thành công", "Đăng ký thành công! Bạn đã được đăng nhập tự động.");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Lỗi", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký tài khoản</Text>

      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={signUpRequest.fullName}
        onChangeText={(text) =>
          setSignUpRequest({ ...signUpRequest, fullName: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={signUpRequest.phoneNumber}
        onChangeText={(text) =>
          setSignUpRequest({ ...signUpRequest, phoneNumber: text })
        }
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={signUpRequest.password}
        onChangeText={(text) =>
          setSignUpRequest({ ...signUpRequest, password: text })
        }
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        value={signUpRequest.confirmPassword}
        onChangeText={(text) =>
          setSignUpRequest({ ...signUpRequest, confirmPassword: text })
        }
        secureTextEntry
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Đăng ký</Text>
        )}
      </TouchableOpacity>

      <Link href="/(auth)/sign-in" asChild>
        <TouchableOpacity>
          <Text style={styles.linkText}>Đã có tài khoản? Đăng nhập</Text>
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