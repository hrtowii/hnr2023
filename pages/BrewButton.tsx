
import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

var step = 1

export default function BrewButton(props, {navigation, route}): any {
  return (
    <View style={styles.Container}>
      <Pressable style={styles.ButtonClick} onPress={() => navigation.navigate('Timer', {duration: props.initialTime})}>
        <Text style={styles.Text}>Brew</Text>
      </Pressable>
    </View>
  );
}



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonClick: {
    width: 180,
    height: 180,
    borderColor: '#6F4E37',
    borderRadius: 100,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});