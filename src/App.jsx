import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import TiketHaji from './screens/TiketHaji';
import TiketUmroh from './screens/TiketUmroh';
import Hubungi from './screens/Hubungi';
import Pesanan from './screens/Pesanan';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

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
              name="card-account-phone"
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
          name="PT. NGAPPHER"
          component={MyTabs}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                style={styles.pesananButton}
                onPress={() => navigation.navigate('Pesanan')}
              >
                <MaterialCommunityIcons
                  name="cart-outline"
                  color="#FFF"
                  size={26}
                />
              </TouchableOpacity>
            ),
          })}
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
  pesananButton: {
    marginRight: 16,
    backgroundColor: '#1e90ff',
    borderRadius: 30,
    padding: 10,
  },
});

export default App;
