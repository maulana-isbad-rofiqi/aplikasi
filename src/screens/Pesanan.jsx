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
  const [jumlahPesanan, setJumlahPesanan] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const pesan = () => {
    console.log('Pesan sekarang');
  };

  const hitungHarga = () => {
    let hargaTotal = parseFloat(paket.harga.replace('Rp. ', '').replace('.', '')) * jumlahPesanan;
    if (voucher.toLowerCase() === 'itsbad') {
      hargaTotal -= hargaTotal * 0.1;
    }

    setTotalHarga(hargaTotal);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.blackText]}>Detail Pesanan:</Text>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Nama Paket:</Text>
        <Text style={[styles.detailText, styles.whiteText, styles.blueBackground]}>{paket.nama}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Harga Paket:</Text>
        <Text style={[styles.detailText, styles.whiteText, styles.blueBackground]}>{paket.harga}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Jumlah:</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          value={jumlahPesanan.toString()}
          onChangeText={(text) => setJumlahPesanan(parseInt(text) || 0)}
          keyboardType="numeric"
        />
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
        onPress={hitungHarga}>
        <Text style={styles.buttonText}>Hitung</Text>
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <Text style={[styles.label, styles.blackText]}>Total Harga:</Text>
        <Text style={[styles.detailText, styles.whiteText, styles.blueBackground]}>Rp. {totalHarga}</Text>
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
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailText: {
    marginBottom: 5,
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
  blueBackground: {
    backgroundColor: 'blue',
    padding: 3,
    borderRadius: 3,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
