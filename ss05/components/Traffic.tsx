import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TrafficLight() {
  const [light, setLight] = useState<'red' | 'yellow' | 'green'>('green');

  const handleChange = () => {
    if (light === 'green') setLight('yellow');
    else if (light === 'yellow') setLight('red');
    else setLight('green');
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.light,
          { backgroundColor: 'red', opacity: light === 'red' ? 1 : 0.3 },
        ]}
      />
      <View
        style={[
          styles.light,
          { backgroundColor: 'yellow', opacity: light === 'yellow' ? 1 : 0.3 },
        ]}
      />
      <View
        style={[
          styles.light,
          { backgroundColor: 'green', opacity: light === 'green' ? 1 : 0.3 },
        ]}
      />

      <TouchableOpacity style={styles.button} onPress={handleChange}>
        <Text style={styles.buttonText}>Chuyển Đèn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
