import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Count: {count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    countText: {
        fontSize: 20,
        margin: 10,
    },
    button: {   
        padding: 10,
        margin: 5,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})
