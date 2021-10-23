import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Timer = () => {
const [second, setsecond] = useState(20);
const [minute, setminute] = useState(0)
const [hour, sethour] = useState(0)

const countdown = () => {
    setInterval(() =>{
      setsecond(second => {
        if (second > 0) 
          return second - 1
        else return 0
      })
   }, 1000);
  };

  const stop =() => {
    return(
    clearInterval(countdown)
    )
  }

  useEffect(() => {
    second === 0 ?
    setTimeout(() => {
      if (minute > 0) {
        setminute(minute - 1); setsecond(59)
      } else if (hour > 0) {
        sethour(hour - 1); setminute(59); setsecond(59)
      } else {
        clearInterval(countdown) 
      }
    }, 1000)
    : null 
},[second]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      {hour < 10 ? `0${hour}` : hour} : 
      {minute < 10 ? `0${minute}` : minute} : 
      {second < 10 ? `0${second}` : second}</Text>
      <View style={styles.container2}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={countdown}>
        <Text style={styles.text1}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity} onPress={stop}>
        <Text style={styles.text1}>Stop</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2 : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  text: {
    fontSize: 40,
  },
  touchableOpacity: {
    width: 150,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#F7DC6F',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 10,
    marginLeft : 10
  },
  text1: {
    fontSize: 40,
  },
});

export default Timer;
