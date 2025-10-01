import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function B1() {
    const [count, setCount] = useState<number>(0);


  return (
    <View style={styles.container}>
      <Text>b1</Text>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button  title='+' onPress={() => setCount(count + 1)} />
        <Button title='-' onPress={() => setCount(count - 1)} />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: 20,
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    }

})