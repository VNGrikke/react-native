import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type TodoItemProps = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

export default function TodoItem({ id, text, onDelete }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(id)}>
        <Text style={styles.deleteText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  deleteBtn: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});
