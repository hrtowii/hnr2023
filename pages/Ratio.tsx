import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useContext, useState } from "react";
import Constants from "expo-constants";
import {
	ApplicationProvider,
	Layout,
	Text,
	Button,
	Modal,
	Input,
} from "@ui-kitten/components";

import { SimpleGrid } from "react-native-super-grid";

import Donut from "../components/Donut";
import Icon from "react-native-vector-icons/FontAwesome";
import { CoffeeContext } from "../components/context/CoffeeContext";

function EditRow({ ratio, setRatio }) {
	const increment = 5;
	function add() {}
	function remove() {}
	return (
		<Layout
			style={{
				padding: 10,
				fontSize: 18,
				height: 44,
				flexDirection: "row",
			}}
		>
			<Text style={{ fontWeight: "bold" }}>Coffee: </Text>

			<TouchableOpacity
				activeOpacity={0.9}
				onPress={() => {}}
				style={{ float: "right" }}
			>
				<Text>-</Text>
			</TouchableOpacity>
			<Text>
				{ratio.coffee}
				{"g"}
			</Text>
			<Input
				style={{ width: 80 }}
				keyboardType="numeric"
				value={ratio.coffee}
				onChangeText={(text) => {
					console.log(text);
					setRatio({
						coffee: parseInt(text),
					});
				}}
			/>
			<TouchableOpacity activeOpacity={0.9} onPress={() => {}} style={{}}>
				<Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
			</TouchableOpacity>
		</Layout>
	);
}

function EditItem({ ratio, index, name, setRatio }) {
	const steps = 5;
	function setVal(value) {
		setRatio({
			...ratio,
			[index]: value,
		});
	}
	function decrement() {
		setVal(ratio[index] - 5);
	}
	function increment() {
		setVal(ratio[index] + 5);
	}
	return (
		<Layout>
			<Text style={{ fontSize: 20, marginLeft: "auto", marginRight: "auto" }}>
				{name}
			</Text>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={decrement}
					style={{ float: "right", marginRight: 10 }}
				>
					<Icon name="minus" size={30} color="#000" />
				</TouchableOpacity>
				<Input
					style={{ width: 80 }}
					keyboardType="numeric"
					value={ratio[index].toString()}
					onChangeText={(text) => {
						setVal(parseInt(text));
					}}
				/>
				<TouchableOpacity
					activeOpacity={1}
					onPress={increment}
					style={{ float: "right", marginLeft: 10 }}
				>
					<Icon name="plus" size={30} color="#000" />
				</TouchableOpacity>
			</View>
		</Layout>
	);
}
export default function Ratio({ navigation, route }) {
	const recipe = {}; //route.params.recipe;
	const coffee = useContext(CoffeeContext);

	const [ratio, setRatio] = useState({
		ratio: 60, // gramms/litre
		coffee: 15, // gramms
		water: 250, // gramms
	});
	const [showModal, setShowModal] = useState(false);

	return (
		<Layout style={styles.container}>
			<Modal
				visible={showModal}
				style={{ width: "100%", height: "50%", marginTop: "60%" }}
			>
				<Layout
					style={{
						padding: 10,
						alignItems: "center",
						backgroundColor: "#ffffff",
						height: "100%",
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
					}}
				>
					{/*<Layout style={{padding:10, }}>
           
           <Layout>
              <EditRow ratio={ratio} setRatio={setRatio}/>
           </Layout>
        </Layout>
        <SimpleGrid
          itemDimension={130}
          data={["Ratio",2,"Coffee",4,"Water",6, 7]}
          renderItem={({ item }) => (<Text>{item}</Text>)}
        />*/}
					<Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>
					<EditItem
						ratio={ratio}
						setRatio={setRatio}
						index="water"
						name="Water"
					/>
					<EditItem
						ratio={ratio}
						setRatio={setRatio}
						index="coffee"
						name="Coffee"
					/>
					<EditItem
						ratio={ratio}
						setRatio={setRatio}
						index="ratio"
						name="Ratio"
					/>
					<Button
						status="basic"
						style={{ marginTop: 10 }}
						onPress={() => {
							setShowModal(false);
						}}
					>
						Close
					</Button>
				</Layout>
			</Modal>
			<Text style={{ fontSize: 40, maxWidth: "80%", fontWeight: "bold" }}>
				Coffier
			</Text>
			<Text style={{ fontSize: 40, maxWidth: "80%", fontWeight: "bold" }}>
				{coffee.name}
			</Text>

			<TouchableOpacity
				style={{ marginLeft: "auto", marginRight: "auto" }}
				onPress={() => {
					navigation.navigate("Timer", { recipe, ratio });
				}}
			>
				<Donut />
			</TouchableOpacity>
			<View style={{ padding: 10 }}></View>
			<Button
				status="basic"
				onPress={() => {
					setShowModal(true);
				}}
			>
				Configure
			</Button>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,

		alignItems: "center",
		justifyContent: "center",
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
