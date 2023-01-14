import { useContext, useState, useEffect } from "react";
import { CoffeeContext } from "../components/context/CoffeeContext";
import { Text, StyleSheet, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Button } from "@ui-kitten/components";

export default function CountDownCircleTimer(props): any {
	//const {duration} = props.route.params
	const coffee = useContext(CoffeeContext);

	useEffect(() => {
		props.navigation.setOptions({
			headerShown: false,
		});
	}, [props.navigation]);

	const totalDuration = coffee.steps.reduce(
		(total, item) => total + item.time,
		0,
	); // Sum function
	const [isPlaying, setIsPlaying] = useState(true);

	const [completed, setCompleted] = useState(false);
	const [currStep, setCurrStep] = useState(0);
	const [startTime, setStartTime] = useState(
		coffee.steps.length > 0 ? coffee.steps[0].time : 0,
	);

	useEffect(() => {
		if (completed) {
			setTimeout(() => {
				setCurrStep(currStep + 1);
				setStartTime(coffee.steps[currStep + 1].time);
			}, 500);
		}
	}, [completed]);
	console.log(props.route.params);

	return (
		<View style={styles.CountDownCircleTimer}>
			<Text
				style={{
					fontSize: 30,
					padding: 0,
					marginTop: "20%",
					fontWeight: "bold",
				}}
			>
				Step {currStep + 1}
			</Text>
			<Text
				style={{ fontSize: 28, padding: 0, marginTop: "30%", marginBottom: 10 }}
			>
				{coffee.steps[currStep].title}
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{
					coffee.steps[currStep].description.replace(
						/\d{1,3}%/g,
						(match) => (parseInt(match) / 100) * props.route.params.settings.water + "g",
					)
				}
			</Text>

			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={startTime}
				colors="#6F4E37"
				onUpdate={(remainingTime) => {
					if (remainingTime > 0) {
						setCompleted(false);
					}
				}}
				onComplete={() => {
					if (currStep >= coffee.steps.length - 1) {
						return { shouldRepeat: false };
					}
					setCompleted(true);
					return { shouldRepeat: true, delay: 0.5 };
				}}
			>
				{({ remainingTime }) => (
					<Text style={styles.Text}>{remainingTime}</Text>
				)}
			</CountdownCircleTimer>
			<View style={{ flexDirection: "row", marginTop: "20%" }}>
				<Button
					style={{}}
					status={"basic"}
					onPress={() => setIsPlaying(!isPlaying)}
				>
					{isPlaying ? "Pause" : "Continue"}
				</Button>
				<Button
					style={{ marginLeft: 10 }}
					status={"basic"}
					onPress={props.navigation.goBack}
				>
					Stop
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	CountDownCircleTimer: {
		flex: 1,
		/*justifyContent: 'center',*/
		alignItems: "center",
	},
	Text: {
		fontSize: 50,
		textAlign: "center",
		fontWeight: "bold",
	},
});
