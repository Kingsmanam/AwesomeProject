import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
let buttons = [1,2,3,'/',4,5,6,'+',7,8,9,'-','clear',0,'=','*']
const Calculator = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Text}></Text>
      <View style={Styles.container1}>
        {buttons.map( item => {
          return (
          <View style={Styles.container2}>
           <TouchableOpacity style={Styles.container3}>
             <Text style={Styles.Text1}>{item}</Text>
           </TouchableOpacity>
          </View> 
          )
        })}
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-evenly',
  },

  container1: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    height: '70%',
    backgroundColor: '#D8D8D8',
    marginTop: 5,
    borderRadius: 10,
    flexWrap : 'wrap',
    padding: 5
  },
  Text: {
    height: '30%',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    fontSize: 30,
  },
  container2 : {
    
    
  },
  container3 : {
    marginBottom : 10,
    marginTop : 10,
    alignItems: 'center',
    justifyContent : 'center',
    height : 80,
    width : 80,
    borderRadius : 40,
    backgroundColor : '#ECECEC',
    
  },
  Text1 : {
    fontSize : 30
  }
});
export default Calculator;
