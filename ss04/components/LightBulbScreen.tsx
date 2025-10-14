import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

export default function LightBulbScreen() {
  const [isOn, setIsOn] = useState(false); 

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <FontAwesome
        name="lightbulb-o"
        size={150}
        color={isOn ? "#FACC15" : "#9CA3AF"} 
        style={styles.bulb}
      />

      <Button title="Bật/Tắt" onPress={toggleLight} />
      
      <Text style={styles.status}>
        Bóng đèn đang: {isOn ? "Sáng 💡" : "Tắt 🌑"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  bulb: {
    marginBottom: 30,
  },
  status: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
});
