import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';

const Doctorlist = () => {
  const [data, setData] = useState([]);

  const getDoctorsFromApi = () => {
    fetch('https://www.tebinja.com/api/v1/doctors/searchi')
      .then(response => response.json())
      .then(json => {
        setData(json.doctors.hits);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    getDoctorsFromApi();
  }, []);

  const renderItem = ({item}) => (
    <View style={Styles.container}>
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
      <Text>آدرس : {item._source.clinics[0].address}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: '#D6DBDF',
    backgroundColor: '#AEB6BF',
    height: 250,
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default Doctorlist;
