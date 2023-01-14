import { ImageSourcePropType } from "react-native";
import { CoffeeList } from "./utils";
;
export const V60Image = require('../../assets/recipeFavicons/V60.jpg');
export const Aeropress = require('../../assets/recipeFavicons/aeropress.jpg');

export const stringToImage = (image: CoffeeList): ImageSourcePropType => {
    switch (image) {
        case 'V60':
            return V60Image;
        case 'Aeropress':
            return Aeropress;
        default:
            return V60Image;
    }
}