import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
const Studentcard = ({navigation,item}) => {
  return (
    <TouchableOpacity 
      style={Styles.container1} 
      onPress={() => navigation.navigate('Studentcard', {item})}>
      <View style={Styles.container2}>
        <Text style={Styles.text}>Name : {item.name}</Text>
        <Text style={Styles.text}>lastname : {item.lastname}</Text>
        <Text style={Styles.text}>Age : {item.age}</Text>
        <Text style={Styles.text}>StudentCode : {item.studentcode}</Text>
        <View style={Styles.container3}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {item.scores.map(item1 => {
              return item1.score < 10 ? (
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red', fontSize: 12}}>
                    {item1.course}:{' '}
                  </Text>
                  <Text style={{color: 'red', fontSize: 12}}>
                    {item1.score}{' '}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Text style={Styles.text1}>{item1.course}:  </Text>
                  <Text style={Styles.text1}>{item1.score}  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <Image
        source={{
          uri: item.image,
        }}
        style={Styles.Image}></Image>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2874A6',
    marginBottom: 10,
    height: 200,
    borderRadius: 15,
    borderWidth:2,
    borderColor:'steelblue',
    padding: 10,
  },
  container2: {
    justifyContent: 'space-between',
    backgroundColor: '#2874A6',
  },
  container3: {
    height: 60,
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2874A6',
    borderRadius: 10,
    padding: 10,
  },
  Image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    includeFontPadding: false,
    color:'white'
  },
  text1: {
    fontSize: 12,
    color:'white'
  },
});

export default Studentcard;
