import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Home></Home>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b20000',
    alignItems: 'flex-start',
    verticalAlign: 'top',
    justifyContent: 'flex-start',
  },
});
