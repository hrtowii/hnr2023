import React, { useCallback, useMemo, useRef, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Coffee } from "../components/utils/utils";
import { CoffeeContext } from "../components/context/CoffeeContext";
import Youtube from "../components/youtubeEmbed/Youtube";

   
export default function cardPreviewModal (props: { videoID: string, name: string }) {
  // context
  const coffee = useContext(CoffeeContext);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.h1}>{coffee.name}</Text>
          <Youtube videoId={"1oB1oDrDkHM"} />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
    h1: {
      fontSize: 48,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    h2: {
      fontSize: 32,
      textAlign: 'left',
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 24,
    },
});
