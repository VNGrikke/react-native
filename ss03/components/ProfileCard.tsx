import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const AVATAR_URL = 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg';
const USER_NAME = 'Nguyễn Văn A';
const USER_DESCRIPTION =
    'Software Engineer | Mobile Developer';

export default function ProfileCard() {
    return (
            <View style={styles.card}>
                <Image source={{ uri: AVATAR_URL }} style={styles.avatar} />
                <Text style={styles.name}>{USER_NAME}</Text>
                <Text style={styles.description}>{USER_DESCRIPTION}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        borderWidth: 3,
        borderColor: '#007AFF',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        fontStyle: 'italic',
    },
});
