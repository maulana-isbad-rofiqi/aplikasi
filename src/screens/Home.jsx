import { StyleSheet, Text, View, TouchableOpacity, Linking, Animated } from 'react-native';
import React, { useRef } from 'react';

const Home = () => {
  const floatAnim = useRef(new Animated.Value(0)).current;

  const floatAnimation = () => {
    Animated.timing(floatAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const sendMessage = () => {
    let phoneNumber = '6287751669434';
    let message = "*_Assalamu'alaikum wr wb._*                                           Apakah sekarang ada promo untuk pemberangkatan umroh dan haji";
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di</Text>
      <Animated.Text
        style={[
          styles.title,
          {
            color: '#1e90ff',
            fontSize: 40,
            transform: [
              {
                translateY: floatAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20],
                }),
              },
            ],
          },
        ]}
      >
        PT. NGAPBHER
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={() => {sendMessage(); floatAnimation();}}>
        <Text style={styles.buttonText}>Tanyakan Promo Tiket Umroh & Haji</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
