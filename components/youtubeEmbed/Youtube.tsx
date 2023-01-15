import React, { useCallback, useState } from "react";
import { View } from "react-native";
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
      <View style={{ borderRadius: 25, height: 200, width: 345 }}>
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={props.videoId}
          onChangeState={onStateChange}
        />
        {/*<Button title={playing ? "pause" : "play"} onPress={togglePlaying}></Button>*/}
      </View>
    </>
  );
}
