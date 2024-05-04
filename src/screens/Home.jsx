import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Home = () => {

  const sendMessage = () => {
    let phoneNumber = '6287751669434';
    let message = "*_Assalamu'alaikum wr wb._*                                           Apakah sekarang ada promo untuk pemberangkatan umroh dan haji";
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di PT. NGAPBHER</Text>
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
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
    backgroundColor: '#f0f0f0', // Ubah warna latar belakang di sini jika perlu
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black', // Mengubah warna teks menjadi hitam
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
