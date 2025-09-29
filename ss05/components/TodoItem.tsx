import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface TodoItemProps {
    todo: string;
    onDelete: () => void;
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>{todo}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 18,
        marginBottom: 8,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 4,
        paddingRight: 10,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 8,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: '#fff',
        textAlign: 'center',
    }
})