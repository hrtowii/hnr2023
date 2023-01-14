import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BrewButton from './pages/BrewButton'
import Timer from './pages/Timer'


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Brew" component={BrewButton} />
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Done({navigation, route}){
  return <View style={styles.container}>
    {JSON.stringify(route.params)}
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
