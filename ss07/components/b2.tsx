import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CurrentTime () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Đồng hồ số</Text>
            <Text style={styles.text}>{time.toLocaleTimeString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },

});
