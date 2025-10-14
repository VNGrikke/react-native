import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface BusinessCardProps {
    imageUrl?: string;
    name?: string;
    title?: string;
    phone?: string;
}

export default function BusinessCard({ imageUrl, name, title, phone }: BusinessCardProps) {
  return (
    <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.phone}>{phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#e9e9e9ff',
        borderRadius: 12,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#2264ffff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        color: '#666',
        marginBottom: 8,
    },
    phone: {
        fontSize: 16,
        color: '#333',
    }
})