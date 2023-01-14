import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

export default function Ratio({navigation, route}){
    const recipe = route.params.recipe;
    const [ratio, setRatio] = useState({})
    
    function moveOn(){
        navigation.navigate("Timer", {recipe,ratio})
    }
    return <View>
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

