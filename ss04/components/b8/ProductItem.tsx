import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  onAddToCart: (id: number) => void;
};

export default function ProductItem({ id, name, price, onAddToCart }: ProductItemProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price.toLocaleString()} ₫</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onAddToCart(id)}>
        <Text style={styles.buttonText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: "#EF4444",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
