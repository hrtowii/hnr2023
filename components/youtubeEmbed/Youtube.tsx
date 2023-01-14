import React, { useState, useCallback, useRef } from "react";
import { View, Button, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Youtube(props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <>
    <View style={{ borderRadius: 25, marginTop: 20, height: 100, width: 345, backgroundColor: "black" }}>
        <YoutubePlayer
            height={200}
            play={playing}
            videoId={props.videoId}
            onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying}></Button>
    </View>
    </>
  );
}
