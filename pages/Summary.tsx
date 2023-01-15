import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { Coffee } from "../components/utils/utils";
import { useContext } from "react";
import { CoffeeContext } from "../components/context/CoffeeContext";
import { SummaryCard } from "../components/card/summaryCard";
import { ScrollView } from "react-native-gesture-handler";
import Youtube from "../components/youtubeEmbed/Youtube";

interface Props {
  coffee: Coffee;
  navigation: any;
}

export default function Summary(props: Props) {
  const settings = props.route.params.settings;
  const coffee = useContext(CoffeeContext);
  return (
    <ScrollView style={styles.scrollView}>
      {
        coffee ?
          <>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Text style={styles.h1}>{coffee.name}</Text>
              <Youtube styles={{ height: 200 }} videoId={coffee.videoID} />
            </View>
            {coffee.steps ? coffee.steps.map((step, index) => (
              <SummaryCard step={step} index={index} settings={settings} />
            )) : <></>}
          </>
          :
          <></>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "column"
  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "left"
  }
});
