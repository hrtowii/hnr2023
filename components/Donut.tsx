import { Text, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

export default function Donut(params) {
	//default donut chart values
	let radius = 150;
	let strokeWidth = 5;
	let color = "grey";
	let percentage = 1; //params.percentage; //adjust this value to alter donut shape

	//some math for formatting
	const circleCircumference = 2 * Math.PI * radius;
	const halfCircle = radius + strokeWidth;
	const size = radius * 2;
	return (
		<View>
			<Svg
				width={2 * radius}
				height={2 * radius}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
				<G rotation="-90" originX={halfCircle} originY={halfCircle}>
					<Text
						style={{
							fontSize: 40,
							marginLeft: "auto",
							marginRight: "auto",
							marginTop: radius * 0.75,
						}}
					>
						Brew
					</Text>
					<Circle
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeOpacity="0"
					/>

					<Circle
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeOpacity="0.5"
						strokeDasharray={circleCircumference}
						strokeDashoffset={(1 - percentage) * circleCircumference}
						strokeLinecap="round"
					/>
				</G>
			</Svg>
		</View>
	);
}
