import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const DigikalaScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={Styles.container}>
      <Image
        source={{
          uri:
            'https://www.tebinja.com/img/uploads/doctors/thumbnails/' +
            item._source.url,
        }}
        style={Styles.image}
      />
      <Text style={Styles.name}>
        {' '}
        {item._source.fname} {item._source.lname}
      </Text>
      <View style={Styles.info}>
        <View style={Styles.circles}>
          <Text style={Styles.text}>تخصص</Text>
        </View>
        <Text style={Styles.textinfo}>
          {item._source.spUnis[0].specialty.name}
        </Text>
      </View>
      <View style={Styles.info}>
        <View style={Styles.circles}>
          <Text style={Styles.text}>دانشگاه</Text>
        </View>
        <Text style={Styles.textinfo}>{item._source.university.name}</Text>
      </View>
      <View style={Styles.info}>
        <View style={Styles.circles}>
          <Text style={Styles.text}>مطب</Text>
        </View>
        <Text style={Styles.textinfo}>{item._source.clinics[0].name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          height: 70,
          marginVertical: 3,
          borderRadius: 25,
          padding: 6,
          marginTop: 20
        }}>
        <Text style={Styles.textaddress}>
          {item._source.clinics[0].address}
        </Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'flex-end',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  info: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    marginVertical: 3,
    borderRadius: 25,
  },
  circles: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5D6D7E',
    marginLeft: 5,
  },
  name: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
  text1: {
    fontSize: 13,
    color: 'black',
  },
  textinfo: {
    fontSize: 13,
    flexWrap: 'wrap',
  },
  textaddress: {
    fontSize: 13,
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
export default DigikalaScreen;
