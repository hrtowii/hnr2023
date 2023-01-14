import { useContext } from 'react'
import { CoffeeContext } from "../components/context/CoffeeContext";
import { Text, StyleSheet, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

var step = 1

export default function CountDownCircleTimer(props): any {
  const {duration} = props.route.params
  const coffee = useContext(CoffeeContext);
  
  //const duration = coffee.steps.reduce((a, b)=>a+b, 0); // Sum function
  return (
    <View style={styles.CountDownCircleTimer}>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
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
