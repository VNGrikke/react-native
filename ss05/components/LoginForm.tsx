import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function LoginForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        alert(`Username: ${username}, Password: ${password}`);
    }
  return (
    <View style={style.container}>
        <Text style={style.title}>LoginForm</Text>
        <TextInput style={style.input} placeholder='Username' value={username} onChangeText={setUsername} />
        <TextInput style={style.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity style={style.button} onPress={handleLogin}>
            <Text style={style.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>    
      </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9fafb',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})