import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { NavigationContainer } from '@react-navigation/native'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'

import Menu from './pages/Menu'
import Ratio from './pages/Ratio'
import Timer from './pages/Timer'


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Ratio" component={Ratio} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Done" component={Done} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}








function Done({navigation, route}){
  return  <View style={styles.container}>
    {JSON.stringify(route.params)}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
