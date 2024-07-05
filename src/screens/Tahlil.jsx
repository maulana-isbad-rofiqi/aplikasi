import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Tahlil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah halaman Tahlil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Tahlil;
