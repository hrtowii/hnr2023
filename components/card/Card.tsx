import { Card, Text } from "@ui-kitten/components";
import { View, StyleSheet, Image } from "react-native";
import { Coffee } from "../utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import SvgUri from "react-native-svg-uri";

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
				props.navigation.navigate("Ratio");
			}}
		>
			<Text category="h3">{props.coffee.name}</Text>
			{ props.coffee.image ?
				<Image style={{width: 160, height: 160,
					borderRadius: 8,
					marginTop: 10}} source={props.coffee.image} /> :
				<View
					style={{
						padding: 80,
						borderRadius: 8,
						marginTop: 10,
						backgroundColor: "#ecf0f1",
					}}
				/>
			}

		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		width: "50%",
	},
});
