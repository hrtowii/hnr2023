import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
// or any pure javascript modules available in npm
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./pages/Menu";
import Ratio from "./pages/Ratio";
import Timer from "./pages/Timer";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { CoffeeContext } from "./components/context/CoffeeContext";
import { Coffee } from "./components/utils/utils";

export default function App() {
	const [coffee, setCoffee] = useState<Coffee | null>(null);
	const Stack = createStackNavigator();
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<CoffeeContext.Provider value={coffee}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Menu"
							component={Menu}
							initialParams={{ set: setCoffee }}
						/>
						<Stack.Screen name="Ratio" component={Ratio} />
						<Stack.Screen name="Timer" component={Timer} />
						<Stack.Screen name="Done" component={Done} />
					</Stack.Navigator>
				</NavigationContainer>
			</CoffeeContext.Provider>
		</ApplicationProvider>
	);
}

function Done({ navigation, route }) {
	return <View style={styles.container}>{JSON.stringify(route.params)}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
