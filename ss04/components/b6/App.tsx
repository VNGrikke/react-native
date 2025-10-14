import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import TodoItem from "./TodoItem";

export default function App() {
  const [notes, setNotes] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;
    const newNote = { id: Date.now(), text: input };
    setNotes([...notes, newNote]);
    setInput("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nhập ghi chú..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addNote}>
          <Text style={styles.addText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem id={item.id} text={item.text} onDelete={deleteNote} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  form: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: "#2563EB",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
