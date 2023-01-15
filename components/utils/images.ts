import { ImageSourcePropType } from "react-native";
import { CoffeeList } from "./utils";

export const V60Image = require("../../assets/recipeFavicons/V60.jpg");
export const Aeropress = require("../../assets/recipeFavicons/aeropress.jpg");
export const Chemex = require("../../assets/recipeFavicons/chemex.jpg");
export const FrenchPress = require("../../assets/recipeFavicons/frenchpress.jpg");

export const stringToImage = (image: CoffeeList): ImageSourcePropType => {
	switch (image) {
		case "V60":
			return V60Image;
		case "Aeropress":
			return Aeropress;
		case "Chemex":
			return Chemex;
		case "French Press":
			return FrenchPress;
		default:
			return V60Image;
	}
};
