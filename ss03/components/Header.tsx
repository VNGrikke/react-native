import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Tiêu đề</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        backgroundColor: "#2196F3", 
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        textAlign: "center",
        color: "#000",
      },
      android: {
        textAlign: "left",
        color: "#fff",
      },
    }),
  },
});
