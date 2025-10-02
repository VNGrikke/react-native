import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'counter_value';

export default function B3() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const loadCounter = async () => {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                setNumber(Number(value));
            }
        };
        loadCounter();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(STORAGE_KEY, number.toString());
    }, [number]);

    const handleIncrement = () => {
        setNumber(prev => prev + 1);
    };

    const handleDecrement = () => {
        setNumber(prev => prev - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{number}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Tăng" onPress={handleIncrement} />
                <Button title="Giảm" onPress={handleDecrement} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontSize: 48,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
    },
    buttonContainer: {      
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
});