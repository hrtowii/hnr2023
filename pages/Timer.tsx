import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../components/context/CoffeeContext";
import { StyleSheet, Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Button } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from "expo-av";

export default function CountDownCircleTimer(props): any {
  const coffee = useContext(CoffeeContext);

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("..//assets/sound/heartbeat.mp3")
    );
    setSound(sound);

    //console.log('Playing Sound');
    await sound.playAsync();
  }

  async function playSoundEnd() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/pass.mp3")
    );
    setSound(sound);

    //console.log('Playing Sound');
    await sound.playAsync();
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
      headerShown: false
    });
  }, [props.navigation]);

  const totalDuration = coffee.steps.reduce(
    (total, item) => total + item.time,
    0
  ); // Sum function
  const [isPlaying, setIsPlaying] = useState(true);

  const [completed, setCompleted] = useState(false);
  const [currStep, setCurrStep] = useState(0);
  const [startTime, setStartTime] = useState(
    coffee.steps.length > 0 ? coffee.steps[0].time : 0
  );
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        setCurrStep(currStep + 1);
        setStartTime(coffee.steps[currStep + 1].time);
      }, 500);
    }
  }, [completed]);

  return (
    <View style={styles.CountDownCircleTimer}>
      <Text
        style={{
          fontSize: 20,
          padding: 0,
          marginTop: "20%",
          fontWeight: "bold"
        }}
      >
        {allDone ? "Done" : `Step ${currStep + 1} / ${coffee.steps.length}`}
      </Text>
      <Text
        style={{ fontSize: 28, padding: 0, marginTop: "30%", marginBottom: 10 }}
      >
        {allDone ? <></> : coffee.steps[currStep].title}
      </Text>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>
        {allDone ? (
          <></>
        ) : (
          coffee.steps[currStep].description.replace(
            /\d{1,3}%/g,
            (match) =>
              (parseInt(match) / 100) * props.route.params.settings.water + "g"
          )
        )}
      </Text>
      {allDone ? (
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
            return { shouldRepeat: true, delay: 0.5 };
          }}
        >
          {({ remainingTime }) => (
            <Text style={styles.Text}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      )}
      <View style={{ flexDirection: "row", marginTop: "20%" }}>
        {allDone ? (
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
    </View>
  );
}

const styles = StyleSheet.create({
  CountDownCircleTimer: {
    flex: 1,
    /*justifyContent: 'center',*/
    alignItems: "center"
  },
  Text: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
});
