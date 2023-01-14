import { Text, View, StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

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
        <Text></Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
