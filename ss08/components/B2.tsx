import React, { useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NIGHT_MODE_KEY = 'night_mode_enabled';

export default function B2() {
    const [isNightMode, setIsNightMode] = useState(false);

    useEffect(() => {
        const loadNightMode = async () => {
            try {
                const storedValue = await AsyncStorage.getItem(NIGHT_MODE_KEY);
                if (storedValue !== null) {
                    setIsNightMode(JSON.parse(storedValue));
                }
            } catch (e) {
                console.error('Failed to load night mode setting.', e);
            }
        };
        loadNightMode();
    }, []);

    const toggleSwitch = async (value: boolean) => {
        setIsNightMode(value);
        try {
            await AsyncStorage.setItem(NIGHT_MODE_KEY, JSON.stringify(value));
        } catch (e) {
            console.error('Failed to save night mode setting.', e);
        }
    };

    const containerStyle = [
        styles.container,
        { backgroundColor: isNightMode ? '#222' : '#fff' }
    ];
    const labelStyle = [
        styles.label,
        { color: isNightMode ? '#fff' : '#222' }
    ];

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>Chế độ ban đêm</Text>
            <Switch
                value={isNightMode}
                onValueChange={toggleSwitch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', padding: 16 },
    label: { fontSize: 16, marginRight: 12 },
});
