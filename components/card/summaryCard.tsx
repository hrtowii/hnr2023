import { Card, Text } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { Step } from "../utils/utils";

interface Props {
	step: Step;
	index: Number;
}

export function SummaryCard(props: Props) {
	const description =
		props.step.description.replace(
			/\d{1,3}%/g,
			(match) => (parseInt(match) / 100) * props.settings.water + "g",
		) + (props.step.description ? " " : "");
	return (
		<Card>
			<View style={styles.card}>
				<Image style={styles.image} source={props.step.image} />
				<Text style={styles.text}>
					{`${props.step.title} ${description}for ${props.step.time}s`}
				</Text>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
		padding: 0,
	},
	image: {
		/*https://stackoverflow.com/questions/29476165/image-resizing-in-react-native*/
		flex: 1,
		width: null,
		height: 30 /*null,*/,
		resizeMode: "contain",
	},
	text: {
		marginLeft: 10,
		flex: 5,
	},
});
