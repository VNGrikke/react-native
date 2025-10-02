import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
    productId: string;
    name: string;
    quantity: number;
}

const productList: CartItem[] = [
    { productId: 'a1', name: 'Laptop', quantity: 1 },
    { productId: 'a2', name: 'Phone', quantity: 1 },
    { productId: 'a3', name: 'Tablet', quantity: 1 },
];

const CART_KEY = 'YOUR_CART';

export default function B7() {
    const [yourCart, setYourCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const loadCart = async () => {
            const data = await AsyncStorage.getItem(CART_KEY);
            if (data) setYourCart(JSON.parse(data));
        };
        loadCart();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(CART_KEY, JSON.stringify(yourCart));
    }, [yourCart]);

    const addToCart = async (product: CartItem) => {
        const data = await AsyncStorage.getItem(CART_KEY);
        let cart: CartItem[] = data ? JSON.parse(data) : [];

        const idx = cart.findIndex(item => item.productId === product.productId);
        if (idx !== -1) {
            cart[idx].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
        setYourCart(cart);
        alert(`${product.name} đã được thêm vào giỏ hàng!`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Giỏ hàng của bạn</Text>
            {yourCart.length === 0 ? (
                <Text style={styles.emptyCart}>Giỏ hàng trống</Text>
            ) : (
                yourCart.map(item => (
                    <View key={item.productId} style={styles.cartItem}>
                        <Text style={styles.productName}>{item.name} - Số lượng: {item.quantity}</Text>
                    </View>
                ))
            )}
            <Text style={styles.sectionTitle}>Danh sách sản phẩm</Text>
            {productList.map(product => (
                <View key={product.productId} style={styles.productItem}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Button title="Thêm vào giỏ" onPress={() => addToCart(product)} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    cartItem: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    productItem: {
        backgroundColor: '#e3e3e3',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 16,
        color: '#222',
    },
    emptyCart: {
        fontStyle: 'italic',
        color: '#888',
        marginVertical: 10,
    },
});