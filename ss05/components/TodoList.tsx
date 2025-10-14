import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = React.useState<string[]>([]);
    const [newTodo, setNewTodo] = React.useState<string>('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    };
    const deleteTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>TodoList</Text>
        <TextInput
            value={newTodo}
            onChangeText={setNewTodo}
            placeholder="Add a new todo"
            style={styles.input}
        />
        <Button title="Add Todo" onPress={addTodo} />
        <View style={styles.todo}>
            {todos.length === 0 ? (
                <Text>No todos yet</Text>
            ) : (
                todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
                ))
            )}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 12,
        borderRadius: 4,
        textAlign: 'center',
    },
    todo: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
})
