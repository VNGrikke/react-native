import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useRef } from 'react'

export default function B3() {
const inputRef = useRef<TextInput>(null)

return (
    <View style={styles.container}>
        <Text style={styles.label}>O nhap lieu</Text>
        <TextInput style={styles.input} ref={inputRef} placeholder='Nhap gi do' />
        <Button title='Focus vao o nhap lieu' onPress={() => { inputRef.current?.focus() }}/>
    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#ecfbffff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#9e9e9eff',
        borderRadius: 4,
        marginBottom: 8,
        backgroundColor: '#ffffffff',
        width : '90%',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 4,
        width: '90%',
        padding: 'auto',
    },
    label: {
        fontSize: 18,
        textAlign : 'left',
        width: '90%',
    },
})
