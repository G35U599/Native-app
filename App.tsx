import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './src/components/FAB';

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    console.log('Botón +1 presionado');
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    console.log('Botón -1 presionado');
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 120 }} >{counter}</Text>
      <View style={{ flexDirection: 'row' }}>
        <FAB handleIncrease={handleIncrease} handleDecrease={handleDecrease} setCounter={setCounter} />
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

});
