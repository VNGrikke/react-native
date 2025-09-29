import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeColor = (color: 'red' | 'green' | 'blue', amount: number) => {
    if (color === 'red') {
      setRed((prev) => Math.min(255, Math.max(0, prev + amount)));
    } else if (color === 'green') {
      setGreen((prev) => Math.min(255, Math.max(0, prev + amount)));
    } else {
      setBlue((prev) => Math.min(255, Math.max(0, prev + amount)));
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.preview,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      />

      <View style={styles.row}>
        <Text style={styles.text}>Red: {red}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('red', -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('red', +15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Green: {green}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('green', -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('green', +15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Blue: {blue}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('blue', -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor('blue', +15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  preview: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    width: 100,
  },
  button: {
    backgroundColor: '#444',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 6,
    width: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
