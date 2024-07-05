import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TiketUmroh() {
  const [selectedRating, setSelectedRating] = useState(0); 
  const paketTiketUmroh = [
    { nama: 'Paket Umroh Bronze', harga: 'Rp. 15.000.000' },
    { nama: 'Paket Umroh Silver', harga: 'Rp. 25.000.000' },
    { nama: 'Paket Umroh Gold', harga: 'Rp. 35.000.000' },
  ];

  const navigation = useNavigation();

  const pesanSekarang = (paket) => {
    console.log(`Anda memesan paket ${paket.nama} dengan harga ${paket.harga}`);
    navigation.navigate('Pesanan', { paket });
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setSelectedRating(i)}
          style={{ marginRight: 5 }}
        >
          <MaterialCommunityIcons
            name={selectedRating >= i ? 'star' : 'star-outline'}
            size={25}
            color={selectedRating >= i ? '#FFD700' : '#A9A9A9'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tiket Umroh</Text>
      {paketTiketUmroh.map((paket, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => pesanSekarang(paket)}>
          <Animated.View
            style={[
              styles.card,
              { opacity: 1 },
            ]}
          >
            <Text style={styles.packageName}>Nama Paket: {paket.nama}</Text>
            <Text style={styles.price}>Harga: {paket.harga}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Rating:</Text>
              {renderRatingStars()}
            </View>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: '#1e90ff' },
              ]}
              onPress={() => pesanSekarang(paket)}
            >
              <Text style={styles.buttonText}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
      ))}
      <Text style={styles.copyRight}>© 2024 Maulana Isbad Rofiqi. Hak Cipta Dilindungi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  packageName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  price: {
    marginBottom: 10,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginRight: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  copyRight: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});