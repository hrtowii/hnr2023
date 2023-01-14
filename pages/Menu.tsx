import { Text, View, StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';
import {MenuCard} from "../components/card/Card";

export default function Menu({navigation, route}){
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
        <MenuCard coffee={{name: "V60", description: "Testing lol lmao hi"}} />
        {/*<Text>test</Text>*/}
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
