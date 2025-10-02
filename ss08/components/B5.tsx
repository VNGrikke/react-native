import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const STORAGE_KEY = 'todos';

export default function B5() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if (jsonValue) {
                    setTodos(JSON.parse(jsonValue));
                }
            } catch (e) {
                console.error('Failed to load todos.', e);
            }
        };
        loadTodos();
    }, []);

    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
            } catch (e) {
                console.error('Failed to save todos.', e);
            }
        };
        saveTodos();
    }, [todos]);

    const addTask = () => {
        if (newTodo.trim() === '') return;
        const newTask: Todo = {
            id: Date.now(),
            title: newTodo,
            completed: false
        };
        setTodos([...todos, newTask]);
        setNewTodo('');
    };

    const removeTask = (id: number) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add a new task"
                    value={newTodo}
                    onChangeText={setNewTodo}
                    style={styles.input}
                
                />
                <Button title="Add Task" onPress={addTask} />
            </View>
            <View style={styles.todoList}>
                {todos.map(todo => (
                    <View key={todo.id} style={styles.todoItem}>
                        <Text style={styles.todoText}>{todo.title}</Text>
                        <Button title="X" onPress={() => removeTask(todo.id)} />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 8,
        marginRight: 8,
        backgroundColor: '#fff',
    },
    todoList: {
        marginTop: 8,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 8,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    todoText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    }
});