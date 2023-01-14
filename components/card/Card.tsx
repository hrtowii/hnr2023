import { Card, Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { Coffee } from "../utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

interface Props {
	coffee: Coffee;
	navigation: any;
	setCoffee: (coffee: Coffee) => void;
}

export const MenuCard = (props: Props) => {
	const coffee = useContext(CoffeeContext);
	return (
		<Card
			style={styles.card}
			onPress={() => {
				props.setCoffee(props.coffee);
				props.navigation.navigate("Brew");
				console.log(coffee);
			}}
		>
			<Text category="h3">{props.coffee.name}</Text>
			<View
				style={{
					padding: 80,
					borderRadius: 8,
					marginTop: 10,
					backgroundColor: "#ecf0f1",
				}}
			></View>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		width: "50%",
	},
});
