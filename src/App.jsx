import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import Yasin from './screens/Yasin';
import Tahlil from './screens/Tahlil';
import Doa from './screens/Doa';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    if (screen === 'home') {
      return (
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          style={styles.backgroundImage}
        >
          <SafeAreaView style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.container}>
              <Text style={styles.title}>
              اَللَّهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ
              </Text>
              <DigitalClock />
              <Text style={styles.infoText}>
                Harap matikan notifikasi saat hendak memulai agar tidak mengganggu
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => setScreen('Yasin')}>
                <Text style={styles.buttonText}>Yasin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setScreen('Tahlil')}>
                <Text style={styles.buttonText}>Tahlil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setScreen('Doa')}>
                <Text style={styles.buttonText}>Doa</Text>
              </TouchableOpacity>
              <Text style={styles.copyrightText}>
                © 2024 Maulana Isbad Rofiqi
              </Text>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      );
    }

    return (
      <View style={styles.screenContainer}>
        {screen === 'Yasin' && (
          <>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Yasin />
          </>
        )}
        {screen === 'Tahlil' && (
          <>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Tahlil />
          </>
        )}
        {screen === 'Doa' && (
          <>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
              <Icon name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Doa />
          </>
        )}
      </View>
    );
  };

  return renderScreen();
};

const DigitalClock = () => {
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

  const formatDate = (time) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dayName = days[time.getDay()];
    const monthName = months[time.getMonth()];
    const day = time.getDate();
    const year = time.getFullYear();
    return `${dayName}, ${day} ${monthName} ${year}`;
  };

  return (
    <View style={styles.digitalClockContainer}>
      <View style={styles.digitalClockBackground}>
        <Text style={styles.digitalClockText}>
          {formatTime(time)}
        </Text>
        <Text style={styles.digitalDateText}>
          {formatDate(time)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#4caf50',
    color: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
  },
  backButton: {
    padding: 12,
    margin: 10,
    alignSelf: 'flex-start',
    elevation: 3,
  },
  digitalClockContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  digitalClockBackground: {
    borderRadius: 15,
    padding: 30,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  digitalClockText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textShadowColor: 'transparent',
    color: '#ffffff',
  },
  digitalDateText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    fontFamily: 'Arial',
    color: '#ffffff',
  },
  copyrightText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;