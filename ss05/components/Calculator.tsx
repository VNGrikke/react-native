import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | number>(0);

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  const renderButton = (value: string, onPress: () => void) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.grid}>
        {['7', '8', '9', '/'].map((v) =>
          renderButton(v, () => handlePress(v))
        )}
        {['4', '5', '6', '*'].map((v) =>
          renderButton(v, () => handlePress(v))
        )}
        {['1', '2', '3', '-'].map((v) =>
          renderButton(v, () => handlePress(v))
        )}
        {['0', 'C', '=', '+'].map((v) =>
          v === 'C'
            ? renderButton('C', handleClear)
            : v === '='
            ? renderButton('=', handleEqual)
            : renderButton(v, () => handlePress(v))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#222',
  },
  display: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    minHeight: 100,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 28,
    color: '#aaa',
    textAlign: 'right',
  },
  resultText: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#444',
    backgroundColor: '#555',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
