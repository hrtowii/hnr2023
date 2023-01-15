import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../components/context/CoffeeContext";
import { StyleSheet, Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Button } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';
import { Step } from "../components/utils/utils";

export default function CountDownCircleTimer(props): any {
	const coffee = useContext(CoffeeContext);

	const [sound, setSound] = React.useState();

	async function playSound() {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync(
			require("..//assets/sound/heartbeat.mp3"),
		);
		setSound(sound);

		//console.log('Playing Sound');
		await sound.playAsync();
	}

	async function playSoundEnd() {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync(
			require("../assets/sound/pass.mp3"),
		);
		setSound(sound);

		//console.log('Playing Sound');
		await sound.playAsync();
	}

	function readNextStep(step: Step) {
		Speech.speak('next ' + step.title + ' ' + step.description.replace(
			/\d{1,3}%/g,
			(match) =>
				(parseInt(match) / 100) * props.route.params.settings.water + "g",
		));
	}

	useEffect(() => {
		return sound
			? () => {
					//console.log('Unloading Sound');
					sound.unloadAsync();
			  }
			: undefined;
	}, [sound]);

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
	const [allDone, setAllDone] = useState(false);
  const [skipStepState, setSkipStepState] = useState(false);
  
	useEffect(() => {
		if (completed) {
			setTimeout(() => {
				setCurrStep(currStep + 1);
				setStartTime(coffee.steps[currStep + 1].time);
				if(currStep+2 < coffee.steps.length && coffee.steps[currStep+2].title === "Pour") {
					readNextStep(coffee.steps[currStep+2]);
				}
			}, 100);
		}
	}, [completed]);
  
  function skipStep(){
    playSoundEnd()
    if (currStep == coffee.steps.length - 1){
      setAllDone(true);
      setIsPlaying(false);
      return
    }
    if (currStep < coffee.steps.length - 1){
      setSkipStepState(true); // Skip curr & resume next one
      setIsPlaying(false); // Stop counter issues
      setCurrStep(currStep + 1);
      setStartTime(coffee.steps[currStep + 1].time);
      if(currStep+2 < coffee.steps.length && coffee.steps[currStep+2].title === "Pour") {
        readNextStep(coffee.steps[currStep+2]);
      }
    }
  }
  useEffect(() => {
    console.log("SkipState", skipStepState);
		if (skipStep){
      setTimeout(() => {
        setSkipStepState(false);
        setIsPlaying(true);
      }, 1000);
    }
	}, [skipStepState]);

  const textSizeRatio = (coffee.steps[currStep].title.length + coffee.steps[currStep].description.length)
	return (
		<View style={styles.CountDownCircleTimer}>
			<Text
				style={{
					fontSize: 20,
					padding: 0,
					marginTop: "20%",
					fontWeight: "bold",
				}}
			>
				{allDone && !skipStepState ? "Done" : `Step ${currStep + !skipStepState} / ${coffee.steps.length}`}
			</Text>
			{
      coffee.steps[currStep].title && !(allDone || skipStepState)?
       <Text
				style={{
          fontSize: 28, padding: 0, 
          marginTop: 
            (textSizeRatio > 30) ? "10%":"20%",
          marginBottom: 10, paddingLeft:20, paddingRight:20
        }}>
				{allDone || skipStepState ? <></> : coffee.steps[currStep].title}
			</Text>
      :
      <Text style={{marginTop:"20%"}}></Text>
      }
			{
      coffee.steps[currStep].description && !(allDone || skipStepState)?
      <Text style={{ fontSize: 40, marginBottom: 20, paddingLeft:20, paddingRight:20}}>
				{allDone ? "" :
					coffee.steps[currStep].description.replace(
						/\d{1,3}%/g,
						(match) =>
							(parseInt(match) / 100) * props.route.params.settings.water + "g",
					)
				}
			</Text>:
      <></>
      }
      <View style={{position: 'absolute', marginLeft:0, marginRight:0, bottom:300}}>
        {allDone || skipStepState ? (
          <Icon name="check" size={200} color="#000" />
        ) : (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={startTime}
            colors="#6F4E37"
            onUpdate={(remainingTime) => {
              if (remainingTime > 0) {
                setCompleted(false);
              }
              if ([1, 2, 3].map((x) => x + 1).includes(remainingTime)) {
                setTimeout(playSound, 700);
              }
              if (remainingTime === 1) {
                setTimeout(playSoundEnd, 700);
              }
            }}
            onComplete={() => {
              if (currStep >= coffee.steps.length - 1) {
                setAllDone(true);
                return { shouldRepeat: false };
              }
              setCompleted(true);
              return { shouldRepeat: true, delay: 0.1 };
            }}
          >
            {({ remainingTime }) => (
              <Text style={styles.Text}>{remainingTime}</Text>
            )}
          </CountdownCircleTimer>
        )}
      </View>
      <View style={{position: 'absolute', bottom:30}}>
        <View style={{ flexDirection: "row",  }}>
          {allDone || skipStepState ? (
            <></>
          ) : (
            <Button
              style={{ borderRadius: 8 }}
              status={"primary"}
              onPress={() => setIsPlaying(!isPlaying)}
              size={"giant"}
            >
              {isPlaying ? "Pause" : "Continue"}
            </Button>
          )}
          <Button
            style={{ marginLeft: 10, borderRadius: 8 }}
            status={"danger"}
            onPress={props.navigation.goBack}
            size={"giant"}
          >
            {allDone ? "Back" : "Stop"}
          </Button>
        </View>
        {allDone || skipStepState ? (
            <></>
          ) : <Button
            style={{ marginTop: 10, marginLeft: "auto", marginRight:"auto", borderRadius: 8 }}
            status={"basic"}
            onPress={skipStep}
            size={"small"}
          >
            Skip
          </Button>
        }
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
