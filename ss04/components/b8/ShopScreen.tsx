import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const PRODUCTS = [
  { id: 1, name: "Áo thun", price: 120000 },
  { id: 2, name: "Quần jean", price: 350000 },
  { id: 3, name: "Giày sneaker", price: 800000 },
];

type Cart = {
  [key: number]: { id: number; name: string; price: number; quantity: number };
};

export default function ShopScreen() {
  const [cart, setCart] = useState<Cart>({});

  const handleAddToCart = (id: number) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;

    setCart((prevCart) => {
      const existing = prevCart[id];
      if (existing) {
        return {
          ...prevCart,
          [id]: { ...existing, quantity: existing.quantity + 1 },
        };
      } else {
        return {
          ...prevCart,
          [id]: { ...product, quantity: 1 },
        };
      }
    });
  };

  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* Tổng số mặt hàng */}
      <Text style={styles.cartInfo}>Số mặt hàng trong giỏ: {totalItems}</Text>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            onAddToCart={handleAddToCart}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F3F4F6",
  },
  cartInfo: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
});
