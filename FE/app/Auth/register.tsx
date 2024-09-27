import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/components/Context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "@/src/components/Context/showPassContext";

export default function RegisterScreen() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prePassword, setPrePassword] = useState("");
  const [error, setError] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  // Hàm kiểm tra mật khẩu và mật khẩu xác nhận
  const validatePasswords = () => {
    if (password !== prePassword) {
      setError("Passwords do not match");
      return false; // Nếu không khớp, trả về false
    }
    return true; // Nếu khớp, trả về true
  };

  const handleRegister = async () => {
    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp không
    if (!validatePasswords()) {
      return; // Nếu không khớp, thoát ra không đăng ký
    }

    try {
      await register(email, password);
      router.push("./(main)");
    } catch (e) {
      setError("Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      {/* Hiển thị lỗi nếu có */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Email input */}
      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={[styles.inputPass, { flex: 1 }]}
          value={password}
          secureTextEntry={passwordVisibility}
          onChangeText={setPassword}
          autoCapitalize="none"
          textContentType="newPassword"
          enablesReturnKeyAutomatically
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>

      {/* Confirm password input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm password"
          style={[styles.inputPass, { flex: 1 }]}
          value={prePassword}
          secureTextEntry={passwordVisibility}
          onChangeText={setPrePassword}
          autoCapitalize="none"
          textContentType="newPassword"
          enablesReturnKeyAutomatically
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>

      {/* Điều khoản dịch vụ */}
      <Text style={styles.terms}>
        By continuing, you agree to our <Text style={styles.link}>terms of service</Text>.
      </Text>

      {/* Nút Sign up */}
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Liên kết đến trang login */}
      <View style={styles.signInContainer}>
        <Text>Already have an account?</Text>
        <Text
          style={styles.signInLink}
          onPress={() => router.push("./login")}
        >
          Sign in here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    paddingRight: 10,
    marginBottom: 15,
  },
  inputPass: {
    paddingLeft: 15,
  },
  error: { 
    color: "red", 
    marginBottom: 15 
  },
  terms: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#3b82f6',
  },
  signupButton: {
    backgroundColor: '#40bf73',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signInLink: {
    color: '#3b82f6',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
