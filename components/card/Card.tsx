import {Card, Text} from "@ui-kitten/components";
import {View, StyleSheet} from "react-native";
import {Coffee} from "../utils/utils";

interface Props {
    coffee: Coffee
}

export const MenuCard = (props: Props) => {
    return (
            <Card style={styles.card} onPress={() => {}}>
                <Text category="h3">{props.coffee.name}</Text>
            </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: "50%"
    }
})