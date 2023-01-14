import { Text } from "@ui-kitten/components";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { Coffee } from "../utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import SvgUri from "react-native-svg-uri";
import { stringToImage } from "../utils/images";

interface Props {
	coffee: Coffee;
	navigation: any;
	setCoffee: (coffee: Coffee) => void;
}

export const MenuCard = (props: Props) => {
	const coffee = useContext(CoffeeContext);
	return (
		<TouchableOpacity
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
					marginTop: 10}} source={stringToImage(props.coffee.name)} /> :
				<View
					style={{
						padding: 80,
						borderRadius: 8,
						marginTop: 10,
						backgroundColor: "#ecf0f1",
					}}
				/>
			}

		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		width: "50%",
		padding: 10,
		backgroundColor: "#fff",
	},
});
