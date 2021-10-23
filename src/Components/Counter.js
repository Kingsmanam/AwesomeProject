import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
const Counter = (props) => {
  const [count, setCount] = useState(props.mycount);

  useEffect(()=>{
    props.def(props.mycount)
  },[]);

  const onPress = (operation) => {
    if (operation == '+') {
      setCount(count + 1);
      props.calcSum(1,operation,props.index);  
    } else if (count > 1) {
      setCount(count - 1);
      props.calcSum(1,props.index);  
    }  
  };
  
  return (
    <View
      style={{
        flex: 1 / 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => onPress('-')}
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius : props.myborderradious
        }}>
        <Text style={{fontSize: 20}}>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20, color: props.mycolor}}>{count}</Text>
      <TouchableOpacity
        onPress={() => onPress('+')}
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius : props.myborderradious
        }}>
        <Text style={{fontSize: 20}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;
