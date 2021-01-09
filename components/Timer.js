import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Timer = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState(<View></View>);
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (!isPaused) {
        const expiredTime = new Date(2021, 1, 5, 13, 20, 0);
        const now = new Date().getTime();
        const distance = expiredTime - now;

        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let miliseconds = Math.floor(distance % 100);

        setCountdown(
          <TouchableHighlight
            style={styles.Timer}
            onPress={() => setIsPaused(!isPaused)}>
            <View>
              <Text style={{textAlign: 'center', fontSize: 46}}>
                {hours < 10 ? '0' + hours : hours}:
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
                <Text style={{fontSize: 32}}>
                  {miliseconds < 10 ? '0' + miliseconds : miliseconds}
                </Text>
              </Text>
            </View>
          </TouchableHighlight>,
        );
      } else {
        return;
      }
    }, 50);
  });
  return countdown;
};

const styles = StyleSheet.create({
  Timer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#e9c46a',
  },
});

export default Timer;
