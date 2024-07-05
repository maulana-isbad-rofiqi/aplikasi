import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import TiketHaji from './screens/TiketHaji';
import TiketUmroh from './screens/TiketUmroh';
import Hubungi from './screens/Hubungi';
import Pesanan from './screens/Pesanan';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1569171699744-efaf706b86bc'}}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <Text style={styles.title}>Selamat Datang!</Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('MyTabs')}
        >
          <Text style={styles.getStartedText}>Mulai</Text>
        </TouchableOpacity>
        <Text style={styles.copyRight}>© 2024 Maulana Isbad Rofiqi. Hak Cipta Dilindungi.</Text>
      </ImageBackground>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'MENU UTAMA',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TiketHaji"
        component={TiketHaji}
        options={{
          tabBarLabel: 'Tiket Haji',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TiketUmroh"
        component={TiketUmroh}
        options={{
          tabBarLabel: 'Tiket Umroh',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hubungi"
        component={Hubungi}
        options={{
          tabBarLabel: 'Hubungi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="phone"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pesanan"
          component={Pesanan}
          options={{ title: 'Pesanan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  getStartedButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  copyRight: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
  },
});

export default App;