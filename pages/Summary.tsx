import { Card, Text } from "@ui-kitten/components";
import { View, StyleSheet, Image } from "react-native";
import { Coffee, Step } from "../components/utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../components/context/CoffeeContext";
import { SummaryCard } from "../components/card/SummaryCard";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
	coffee: Coffee;
	navigation: any;
}

export const Summary = (props: Props) => {
	const coffee = useContext(CoffeeContext);
	return (
        <ScrollView style={styles.scrollView}>
            {coffee.steps.map((step, index) => (
                <SummaryCard step={step} index={index} />
            ))}
        </ScrollView>
	);
};

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'column'
    }
});
