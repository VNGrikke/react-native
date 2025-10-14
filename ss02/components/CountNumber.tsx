import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CountNumber() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <Button title="Giảm" onPress={() => setCount(count - 1)} />
        <View style={{ width: 20 }} /> 
        <Button title="Tăng" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  counter: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
