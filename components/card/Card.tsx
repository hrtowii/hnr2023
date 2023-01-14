import {Card, Text} from "@ui-kitten/components";
import {View} from "react-native";
import {Coffee} from "../utils/utils";

interface Props {
    coffee: Coffee
}

export const MenuCard = (props: Props) => {
    return (
        <View>
            <Card onPress={() => {}}>
                <Text category="h1">{props.coffee.name}</Text>
                <Text category="s1">{props.coffee.description}</Text>
            </Card>
        </View>
    )
}