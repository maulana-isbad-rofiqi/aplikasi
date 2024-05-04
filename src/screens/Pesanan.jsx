import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Pesanan() {
  const route = useRoute();
  const navigation = useNavigation();
  const { paket } = route.params;

  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [voucher, setVoucher] = useState('');

  const pesan = () => {
    console.log('Pesan sekarang');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.blackText]}>Detail Pesanan:</Text>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Nama Paket:</Text>
        <Text style={[styles.detailText, styles.blackText, styles.blueBackground]}>{paket.nama}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Harga:</Text>
        <Text style={[styles.detailText, styles.blackText, styles.blueBackground]}>{paket.harga}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.blackText]}>Nama:</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          value={nama}
          onChangeText={setNama}
          placeholder="Nama"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.blackText]}>Alamat:</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          value={alamat}
          onChangeText={setAlamat}
          placeholder="Alamat"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.blackText]}>Nomor HP:</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          value={nomorHP}
          onChangeText={setNomorHP}
          placeholder="Nomor HP"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.blackText]}>Masukkan Kode Promo:</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          value={voucher}
          onChangeText={setVoucher}
          placeholder="Kode Promo"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={pesan}>
        <Text style={styles.buttonText}>Pesan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailText: {
    marginBottom: 10,
  },
  blackText: {
    color: 'black',
  },
  blueBackground: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
