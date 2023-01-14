import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { MenuCard } from "../components/card/Card";
import { V60Image } from "../components/utils/images";

export default function Menu({ navigation, route }) {
	// function move(){
	// }
	const setCoffee = route.params.set;
	return (
		<View style={styles.container}>
			<View style={styles.containerRow}>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "V60", image: "V60", steps: [] }}
					setCoffee={setCoffee}
				/>
				<MenuCard
					navigation={navigation}
					coffee={{ name: "Aeropress", image: "Aeropress", steps: [] }}
					setCoffee={setCoffee}
				/>
			</View>
			<View style={styles.containerRow}>
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
