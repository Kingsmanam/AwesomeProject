import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const StudentScreen = ({route}) => {
  const {item} =route.params;

  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri: item.image}} />
      <Text style={Styles.text}>{' '}{item.name} {item.lastname}{' '}</Text>
      <Text style={Styles.text1}>Age : {item.age}</Text>
      <Text style={Styles.text1}>StudentCode : {item.studentcode}</Text>
      <View style={Styles.container2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.scores.map(item1 => {
            return item1.score < 10 ? (
              <View style={{}}>
                <View style={{backgroundColor:'red',height:50,width:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 15}}>{item1.score}</Text>
                </View>
                <Text style={{fontSize: 15}}>{item1.course}{'  '}</Text>
              </View>
            ) : (
              <View style={{justifyContent:'space-between'}}>
                <View style={Styles.score}>
                <Text style={Styles.text2}>{item1.score}</Text>
                </View>
                <Text style={Styles.text1}>{item1.course}{'   '}</Text> 
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 15,
  },
  text2: {
    color:'white'
  },
  container2: {
    height: 200,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  score: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5D6D7E'
  }
});
export default StudentScreen;
