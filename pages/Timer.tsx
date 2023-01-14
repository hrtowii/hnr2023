
import { Text, StyleSheet, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

var step = 1

export default function CountDownCircleTimer(): any {
  return (
    <View style={styles.CountDownCircleTimer}>
      <CountdownCircleTimer
        isPlaying
        duration={timeRemaining()}
        colors='#6F4E37'
        onComplete={() => {
          step += 1
          console.log(step)
          return { shouldRepeat: true, delay: 0.1 }
        }}
      >
        {({ remainingTime }) => <Text style={styles.Text}>{remainingTime}</Text>}
      </CountdownCircleTimer>
    </View>
  )
}

function timeRemaining () {
  return 30
}

const styles = StyleSheet.create({
  CountDownCircleTimer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});