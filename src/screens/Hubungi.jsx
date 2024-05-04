import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

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
    <View>
      <Text style={{ color: 'black', fontWeight: 'bold' }}>Selamat Datang di Menu Hubungi</Text>
      <Text style={{ marginTop: 10, color: 'black', fontWeight: 'bold' }}>Silahkan konsultasikan masalah Anda melalui tombol di bawah ini:</Text>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', marginTop: 10 }} onPress={callNumber}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Hubungi melalui Telepon</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', marginTop: 10 }} onPress={openWhatsApp}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Hubungi melalui WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'orange', marginTop: 10 }} onPress={sendEmail}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Hubungi melalui Email</Text>
      </TouchableOpacity>
    </View>
  );
}
