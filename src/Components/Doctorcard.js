import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Doctorcard = ({item,navigation}) => {

  return (
    <TouchableOpacity 
      style={Styles.container}
      onPress={() => navigation.navigate('DoctorProfile', {item})}>
      <View style={Styles.container1}>
        <View style={Styles.container2}>
          <Text style={Styles.text}>
            نام : {item._source.fname} {item._source.lname}
          </Text>
          <Text style={Styles.text}>
            تخصص : {item._source.spUnis[0].specialty.name}
          </Text>
          <Text style={Styles.text}>
            دانشگاه فارق التحصیلی : {item._source.university.name}
          </Text>
          <Text style={Styles.text}>مطب : {item._source.clinics[0].name}</Text>
        </View>
        <Image
          source={{
            uri:
              'https://www.tebinja.com/img/uploads/doctors/thumbnails/' +
              item._source.url,
          }}
          style={Styles.image}
        />
      </View>
      <Text style={Styles.text1}>آدرس : {item._source.clinics[0].address}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#00B9A5',
    height: 200,
    marginBottom: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    justifyContent: 'space-between',
    width: 190,
    height: 120,
  },
  text: {
    fontSize: 12,
    color: 'white'
  },
  text1: {
    fontSize:13,
    color:'white'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default Doctorcard;
