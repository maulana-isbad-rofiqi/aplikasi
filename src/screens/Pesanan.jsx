import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Pesanan() {
  const route = useRoute();
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.label, styles.boldText, styles.whiteText]}>Detail Pesanan:</Text>
        <Text style={[styles.detailText, styles.whiteText]}>Nama Paket: {paket.nama}</Text>
        <Text style={[styles.detailText, styles.whiteText]}>Harga Paket: {paket.harga}</Text>
        <TextInput
          style={[styles.input, styles.whiteText]}
          value={jumlahPesanan.toString()}
          onChangeText={(text) => setJumlahPesanan(parseInt(text) || 0)}
          keyboardType="numeric"
          placeholder="Jumlah Pesanan"
        />
        <TextInput
          style={[styles.input, styles.whiteText]}
          value={nama}
          onChangeText={setNama}
          placeholder="Nama"
        />
        <TextInput
          style={[styles.input, styles.whiteText]}
          value={alamat}
          onChangeText={setAlamat}
          placeholder="Alamat"
        />
        <TextInput
          style={[styles.input, styles.whiteText]}
          value={nomorHP}
          onChangeText={setNomorHP}
          placeholder="Nomor HP"
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, styles.whiteText]}
          value={voucher}
          onChangeText={setVoucher}
          placeholder="Masukkan Kode Promo"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={hitungHarga}>
          <Text style={[styles.buttonText, styles.whiteText]}>Hitung Total Harga</Text>
        </TouchableOpacity>
        <Text style={[styles.label, styles.boldText, styles.whiteText]}>Total Harga: Rp. {totalHarga}</Text>
        <TouchableOpacity
          style={[styles.button, { marginBottom: 20, backgroundColor: 'orange' }]}
          onPress={pesan}>
          <Text style={[styles.buttonText, styles.whiteText]}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: {
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  detailText: {
    marginBottom: 10,
    fontSize: 16,
  },
  whiteText: {
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});