import React, { useReducer, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

type Todo = {
    id: number;
    name: string;
    completed: boolean;
};

type State = {
    todos: Todo[];
};

type Action =
    | { type: 'ADD_TODO'; name: string }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'DELETE_TODO'; id: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo: Todo = {
                id: Date.now(),
                name: action.name,
                completed: false,
            };
            return { todos: [...state.todos, newTodo] };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        default:
            return state;
    }
}

export default function B5() {
    const [state, dispatch] = useReducer(reducer, { todos: [] });
    const [input, setInput] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Add new todo"
                />
                <Button
                    title="Add"
                    onPress={() => {
                        if (input.trim()) {
                            dispatch({ type: 'ADD_TODO', name: input });
                            setInput('');
                        }
                    }}
                />
            </View>
            {state.todos.map(todo => (
                <View key={todo.id} style={styles.todoRow}>
                    <TouchableOpacity
                        style={styles.todoTextContainer}
                        onPress={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
                    >
                        <Text style={[styles.todoText, todo.completed && styles.completed]}>
                            {todo.name}
                        </Text>
                    </TouchableOpacity>
                    <Button
                        title="Delete"
                        color="red"
                        onPress={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    inputRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20 
    },
    input: { flex: 1, 
        borderWidth: 1, 
        borderColor: '#ccc',
        padding: 8, marginRight: 10,
        borderRadius: 4 
    },
    todoRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10 
    },
    todoTextContainer: { flex: 1 },
    todoText: { fontSize: 18 },
    completed: { textDecorationLine: 'line-through', color: 'gray' },
});
