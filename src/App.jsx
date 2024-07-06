import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Yasin from './screens/Yasin';
import Tahlil from './screens/Tahlil';
import Doa from './screens/Doa';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [screen, setScreen] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Yasin':
        return (
          <View style={[styles.screenContainer, isDarkMode ? styles.darkScreen : styles.lightScreen]}>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color={isDarkMode ? "#ffffff" : "#000000"} />
            </TouchableOpacity>
            <Yasin isDarkMode={isDarkMode} />
          </View>
        );
      case 'Tahlil':
        return (
          <View style={[styles.screenContainer, isDarkMode ? styles.darkScreen : styles.lightScreen]}>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color={isDarkMode ? "#ffffff" : "#000000"} />
            </TouchableOpacity>
            <Tahlil isDarkMode={isDarkMode} />
          </View>
        );
      case 'Doa':
        return (
          <View style={[styles.screenContainer, isDarkMode ? styles.darkScreen : styles.lightScreen]}>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color={isDarkMode ? "#ffffff" : "#000000"} />
            </TouchableOpacity>
            <Doa isDarkMode={isDarkMode} />
          </View>
        );
      case 'home':
      default:
        return (
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
              اللهم صل على محمد
            </Text>
            <DigitalClock isDarkMode={isDarkMode} />
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Yasin')}>
              <Text style={styles.buttonText}>Yasin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Tahlil')}>
              <Text style={styles.buttonText}>Tahlil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setScreen('Doa')}>
              <Text style={styles.buttonText}>Doa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
              <Text style={styles.toggleButtonText}>{isDarkMode ? '🌞' : '🌙'}</Text>
            </TouchableOpacity>
          </ScrollView>
        );
    }
  };

  return (
    <View style={[styles.appContainer, isDarkMode ? styles.darkMode : styles.lightMode]}>
      {renderScreen()}
    </View>
  );
};

const DigitalClock = ({ isDarkMode }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={[styles.digitalClockContainer, isDarkMode ? styles.darkClockBackground : styles.lightClockBackground]}>
      <View style={[styles.digitalClockBackground, isDarkMode ? styles.darkClock : styles.lightClock]}>
        <Text style={[styles.digitalClockText, isDarkMode ? styles.darkClockText : styles.lightClockText]}>
          {formatTime(time)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: '#2e2e2e',
  },
  lightMode: {
    backgroundColor: '#ffffff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#4caf50',
    color: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  darkTitle: {
    color: '#f0f0f0',
  },
  lightTitle: {
    color: '#1a1a1a',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  screenContainer: {
    flex: 1,
  },
  darkScreen: {
    backgroundColor: '#2e2e2e',
  },
  lightScreen: {
    backgroundColor: '#ffffff',
  },
  backButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    alignSelf: 'flex-start',
  },
  digitalClockContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  darkClockBackground: {
    backgroundColor: '#000000',
  },
  lightClockBackground: {
    backgroundColor: '#ffffff',
  },
  digitalClockBackground: {
    borderRadius: 15,
    padding: 30,
    shadowColor: '#4caf50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 10,
  },
  darkClock: {
    backgroundColor: '#000000',
  },
  lightClock: {
    backgroundColor: '#ffffff',
  },
  digitalClockText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Digital-7',
    textShadowColor: '#4caf50',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  darkClockText: {
    color: '#00ff00',
  },
  lightClockText: {
    color: '#00ff00',
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
  },
  toggleButtonText: {
    fontSize: 24,
  },
});

export default App;
