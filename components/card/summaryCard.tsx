import { Card, Text } from "@ui-kitten/components";
import { View, StyleSheet, Image } from "react-native";
import { Coffee, Step } from "../utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
	step: Step;
	index: Number;
}

export const SummaryCard = (props: Props) => {
	return (
		<Card style={styles.card}>
			<Image style={styles.image} source={require(props.step.image)} />
			<Text style={styles.text}>
				`${props.step.title} ${props.step.description} for ${props.step.time}s`
			</Text>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
	},
	image: {
		flex: 1,
	},
	text: {
		flex: 5,
	},
});
