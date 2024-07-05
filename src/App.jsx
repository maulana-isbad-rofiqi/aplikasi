import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Yasin from './screens/Yasin';
import Tahlil from './screens/Tahlil';
import Doa from './screens/Doa';

const App = () => {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    switch (screen) {
      case 'Yasin':
        return <Yasin />;
      case 'Tahlil':
        return <Tahlil />;
      case 'Doa':
        return <Doa />;
      case 'home':
      default:
        return (
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Selamat Datang</Text>
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Yasin')}>
              <Text style={styles.buttonText}>Yasin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Tahlil')}>
              <Text style={styles.buttonText}>Tahlil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Doa')}>
              <Text style={styles.buttonText}>Doa</Text>
            </TouchableOpacity>
          </ScrollView>
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
