import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Hubungi() {
  const sendEmail = () => {
    let email = 'isbadd84@gmail.com';
    Linking.openURL(`mailto:${email}`);
  };

  const callNumber = () => {
    let phoneNumber = '087751669434';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openWhatsApp = () => {
    let phoneNumber = '6287751669434';
    let message = encodeURIComponent("Assalamu'alaikum");
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hubungi Kami</Text>
      <Text style={styles.subtitle}>Silakan pilih salah satu metode berikut untuk menghubungi kami:</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#1e90ff' }]} onPress={callNumber}>
        <MaterialCommunityIcons name="phone" size={24} color="white" />
        <Text style={styles.buttonText}>Telepon</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#25D366' }]} onPress={openWhatsApp}>
        <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
        <Text style={styles.buttonText}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={sendEmail}>
        <MaterialCommunityIcons name="email" size={24} color="white" />
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>
      <Text style={styles.copyRight}>© 2024 Maulana Isbad Rofiqi. Hak Cipta Dilindungi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  copyRight: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
  },
});
