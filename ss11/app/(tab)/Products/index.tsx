import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Index() {
  const router = useRouter();
  const [products] = useState<Product[]>([
    { id: 1, name: "Product A", price: 100, quantity: 10 },
    { id: 2, name: "Product B", price: 200, quantity: 5 },
    { id: 3, name: "Product C", price: 150, quantity: 8 },
  ]);

  const renderProduct = ({ item }: { item: Product }) => (
    <Pressable
      onPress={() => router.push(`/(tab)/Products/${item.id}` as any)}
      style={styles.productItem}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: ${item.price}</Text>
      <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <Text>No products available</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  productItem: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    color: "#388e3c",
    fontSize: 15,
    marginBottom: 2,
  },
  productQuantity: {
    color: "#1976d2",
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
    fontSize: 16,
  },
});
