import { Text, View, StyleSheet } from "react-native";
import { useEffect } from "react";
import Constants from "expo-constants";
import { MenuCard } from "../components/card/Card";
import { V60Image } from "../components/utils/images";
import Logo from "../assets/logo.svg";
import { Coffees } from "../components/utils/data";

export default function Menu({ navigation, route }) {
	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	const setCoffee = route.params.set;
	return (
		<View style={styles.container}>
			<Logo
				style={{
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "30%",
					marginBottom: "10%",
				}}
			/>
			{Coffees.map((coffee, index) => {
				// 	only 2 cards per row
				if (index % 2 === 0) {
					return (
						<View style={styles.containerRow} key={index}>
							<MenuCard
								coffee={coffee}
								navigation={navigation}
								setCoffee={setCoffee}
							/>
							<MenuCard
								coffee={Coffees[index + 1]}
								navigation={navigation}
								setCoffee={setCoffee}
							/>
						</View>
					);
				}
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
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
