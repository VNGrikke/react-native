import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
}


export default function B8() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); 

  useEffect(() => {
    if (debouncedQuery) {
      console.log("🔍 Gọi API với từ khóa:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa..."
        value={query}
        onChangeText={setQuery}
      />
      <Text style={styles.result}>Giá trị gõ ngay: {query}</Text>
      <Text style={styles.result}>Giá trị debounce: {debouncedQuery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 5,
  },
});
