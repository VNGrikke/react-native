import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function B1() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState<string | null>(null);

    useEffect(() => {
        const fetchName = async () => {
            const value = await AsyncStorage.getItem('userName');
            if (value) setSavedName(value);
        };
        fetchName();
    }, []);

    const handleSave = async () => {
        await AsyncStorage.setItem('userName', name);
        setSavedName(name);
    };
    
    const handleLogout = async () => {
        await AsyncStorage.removeItem('userName');
        setSavedName(null);
        setName('');
    }

    return (
        <View style={{ padding: 20 }}>
            {savedName ? (
                <>
                    <Text style={{ fontSize: 18, marginBottom: 20 }}>
                        Chào mừng trở lại, {savedName}!
                    </Text>
                    <Button title="Đăng xuất" onPress={handleLogout} />
                </>
            ) : (
                <>
                    <Text>Nhập tên của bạn:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="Nhập tên của bạn"
                        style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            padding: 10,
                            marginVertical: 10,
                        }}
                    />
                    <Button title="Lưu" onPress={handleSave} />
                </>
            )}
        </View>
    );
}
