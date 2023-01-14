import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { NavigationContainer } from '@react-navigation/native'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'

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


function Menu({navigation, route}){
    const recipe = {
        name: "D",
        steps : [
            {text: 'Pour 50g of water', time: 50},
             {text: 'Pour 50g of water', time: 50}
        ]
    }
    function move(){
        navigation.navigate("Ratio", {recipe})
    }
    return <View>
        <Text></Text>
    </View>
}

function Ratio({navigation, route}){
    const recipe = route.params.recipe;
    const [ratio, setRatio] = useState({})
    
    function moveOn(){
        navigation.navigate("Timer", {recipe,ratio})
    }
    return <View>
    </View>
}

function Timer({navigation, route}){
    const recipe = route.params.recipe;
    
    
  return <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      
         <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            // do your stuff here
            navigation.navigate("Done", { 'group': 1 });
            return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => <Text>{remainingTime}</Text>}
        </CountdownCircleTimer>
    </View>
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