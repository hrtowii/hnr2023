import { Text, View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useContext, useMemo, useRef, useCallback } from "react";
import Constants from "expo-constants";
import { MenuCard } from "../components/card/Card";
import { V60Image } from "../components/utils/images";
import Logo from "../assets/logo.svg";
import { Coffees } from "../components/utils/data";
import { Coffee } from "../components/utils/utils";
import { CoffeeContext } from "../components/context/CoffeeContext";

import {
	BottomSheetModal,
	BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';

export default function Menu({ navigation, route }) {
	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	const setCoffee = route.params.set;
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['90%'], []);
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
        {[Coffees[0]].map((coffee) => <MenuCard
					navigation={navigation}
					handlePresentModalPress={handlePresentModalPress}
					coffee={coffee}
					setCoffee={setCoffee}
				/>)}
				<MenuCard
					navigation={navigation}
					handlePresentModalPress={handlePresentModalPress}
					coffee={{ name: "Aeropress", videoID: "j6VlT_jUVPc"}}
					setCoffee={setCoffee}
				/>
			</View>
			<View style={styles.containerRow}>
				<MenuCard
					navigation={navigation}
					handlePresentModalPress={handlePresentModalPress}
					coffee={{ name: "Chemex", videoID: "X5x7yoc" }}
					setCoffee={setCoffee}
				/>
				<MenuCard
					navigation={navigation}
					handlePresentModalPress={handlePresentModalPress}
					coffee={{ name: "French Press", videoID: "st571DYYTR8" }}
					setCoffee={setCoffee}
				/>
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
      textAlign: 'left',
    },
	contentContainer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 24,
	}
});
