import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 120 }} >{counter}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.button} onPress={() => setCounter(counter + 1)}>
          <Text>+1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCounter(counter - 1)}>
          <Text>-1</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 120,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});
