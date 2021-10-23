import React from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
 
  return (
    <View style={Styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Studentlist')}
        style={Styles.button1}>
          <ImageBackground style={Styles.imagebackground} source={{uri : 'https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?size=626&ext=jpg'}}>
            <Text style={Styles.text1}>Studentlist</Text>
          </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Doctorlist')}
        style={Styles.button1}>
          <ImageBackground style={Styles.imagebackground} source={{uri : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F05%2F21%2FGettyImages-166170332.jpg'}}>
            <Text style={Styles.text1}>Doctorlist</Text>
          </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity 
        // onPress={() => navigation.navigate('Digikala')}
        style={Styles.button1}>
          <ImageBackground style={Styles.imagebackground} source={{uri : ''}}>
            <Text style={Styles.text1}>Digikala</Text>
          </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent:'space-around',
  },
  button1: {
    height: 200,
    width: '100%', 
  },
  imagebackground: {
    flex: 1,
    justifyContent:'center'
  },
  text1: {
    color: "white",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
export default HomeScreen;
