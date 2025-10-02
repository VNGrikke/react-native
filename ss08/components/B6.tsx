import React, { useEffect, useState } from 'react';
import { Switch, Text, TextInput, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'userSettings';

export default function B6() {
    const [settings, setSettings] = useState({
        username: 'Guest',
        email: '',
        notificationsEnabled: true,
    });

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if (jsonValue != null) {
                    setSettings(JSON.parse(jsonValue));
                }
            } catch (e) {
                console.error('Failed to load settings.', e);
            }
        };
        loadSettings();
    }, []);

    useEffect(() => {
        const saveSettings = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            } catch (e) {
                console.error('Failed to save settings.', e);
            }
        };
        saveSettings();
    }, [settings]);

    const updateSetting = (key: keyof typeof settings, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CÀI ĐẶT</Text>
            <View style={styles.section}>
                <Text>Tên hiển thị</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên hiển thị"
                    value={settings.username}
                    onChangeText={text => updateSetting('username', text)}
                />
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập email"
                    value={settings.email}
                    onChangeText={text => updateSetting('email', text)}
                />
                <View style={styles.switchRow}>
                    <Text>Nhận thông báo</Text>
                    <Switch
                        value={settings.notificationsEnabled}
                        onValueChange={value => updateSetting('notificationsEnabled', value)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20 
    },
    header: { 
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 20 
    },
    section: { 
        gap: 12 
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        padding: 8, 
        marginBottom: 12, 
        borderRadius: 4 
    },
    switchRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 12 
    },
});
