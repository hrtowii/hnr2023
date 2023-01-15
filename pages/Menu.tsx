import { StyleSheet, View } from "react-native";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { MenuCard } from "../components/card/Card";
import Logo from "../assets/logo.svg";
import { Coffees } from "../components/utils/data";
import { Coffee } from "../components/utils/utils";
import { CoffeeContext } from "../components/context/CoffeeContext";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function Menu({ navigation, route }) {
	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	const setCoffee = route.params.set;
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const snapPoints = useMemo(() => ["90%"], []);
	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);
	console.log(Coffee);
	const coffee = useContext(CoffeeContext);
	return (
		<View style={styles.container}>
			<Logo
				style={{
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "30%",
					marginBottom: "10%",
				}}
			/>
			<View style={styles.containerRow}>
				{[Coffees[0], Coffees[1]].map((coffee) => (
					<MenuCard
						navigation={navigation}
						handlePresentModalPress={handlePresentModalPress}
						coffee={coffee}
						setCoffee={setCoffee}
					/>
				))}
			</View>
			<View style={styles.containerRow}>
				{[Coffees[2], Coffees[3]].map((coffee) => (
					<MenuCard
						navigation={navigation}
						handlePresentModalPress={handlePresentModalPress}
						coffee={coffee}
						setCoffee={setCoffee}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#ecf0f1",
	},
	containerRow: {
		display: "flex",
		paddingBottom: 4,
		flexDirection: "row",
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},

	h2: {
		fontSize: 32,
		textAlign: "left",
	},
	contentContainer: {
		flex: 1,
		alignItems: "flex-start",
		padding: 24,
	},
});
