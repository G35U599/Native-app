import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface FABProps {
  handleIncrease: () => void;
  handleDecrease: () => void;
  setCounter: (value: number) => void;
}

export default function FAB({ handleIncrease, handleDecrease, setCounter }: FABProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Pressable style={styles.button} onPress={handleIncrease} onLongPress={() => setCounter(0)}>
        <Text>+ 1</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleDecrease}>
        <Text>- 1</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
})