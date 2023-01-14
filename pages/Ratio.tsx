import {  View, StyleSheet } from 'react-native';
import {useState} from 'react';
import Constants from 'expo-constants';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

export default function Ratio({navigation, route}){
    const recipe = {}//route.params.recipe;
    const [ratio, setRatio] = useState({})
    
    function moveOn(){
        navigation.navigate("Timer", {recipe,ratio})
    }
    return <View>
      <Button>Configure</Button>
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

