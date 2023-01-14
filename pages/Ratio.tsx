import { View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import Constants from "expo-constants";
import {
	ApplicationProvider,
	Layout,
	Text,
	Button,
} from "@ui-kitten/components";
import { CoffeeContext } from "../components/context/CoffeeContext";

export default function Ratio({ navigation, route }) {
	const coffee = useContext(CoffeeContext);
	const [ratio, setRatio] = useState({});

	function moveOn() {
		// navigation.navigate("Timer", {recipe,ratio})
	}
	return (
		<View>
			<Text>Current coffee: {coffee.name}</Text>
			<Button>Configure</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
