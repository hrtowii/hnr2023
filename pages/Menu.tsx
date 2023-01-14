import { Text, View, StyleSheet } from "react-native";
import { useEffect } from 'react'; 
import Constants from "expo-constants";
import { MenuCard } from "../components/card/Card";
import Logo from "../assets/logo.svg";

export default function Menu({ navigation, route }) {
	useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);
  
	const setCoffee = route.params.set;
	return (
		<View style={styles.container}>
      <Logo style={{marginLeft:'auto', marginRight:'auto', marginTop: "30%", marginBottom: "10%"}}/>
			<View style={styles.containerRow}>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "V60", description: "Testing lol lmao hi" }}
					setCoffee={setCoffee}
				/>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "V60", description: "Testing lol lmao hi" }}
					setCoffee={setCoffee}
				/>
			</View>
			<View style={styles.containerRow}>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "Aeropress", description: "Testing lol lmao hi" }}
					setCoffee={setCoffee}
				/>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "Aeropress", description: "Testing lol lmao hi" }}
					setCoffee={setCoffee}
				/>
			</View>
			{/*<Text>test</Text>*/}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#ecf0f1",
	},
	containerRow: {
		display: "flex",
		paddingBottom: 4,
		flexDirection: "row",
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
