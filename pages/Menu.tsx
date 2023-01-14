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
    return <View style={styles.container}>
        <View style={styles.containerRow}>
            <MenuCard coffee={{name: "V60", description: "Testing lol lmao hi"}} />
            <MenuCard coffee={{name: "V60", description: "Testing lol lmao hi"}} />
        </View>
        <View style={styles.containerRow}>
            <MenuCard coffee={{name: "Aeropress", description: "Testing lol lmao hi"}} />
            <MenuCard coffee={{name: "Aeropress", description: "Testing lol lmao hi"}} />
        </View>
        {/*<Text>test</Text>*/}
    </View>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
     flexDirection: "column",
    backgroundColor: '#ecf0f1',
  },
    containerRow: {
        display: "flex",
        flexDirection: "row",
    },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
