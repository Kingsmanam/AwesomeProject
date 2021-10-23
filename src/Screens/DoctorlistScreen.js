import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Doctorcard from '../Components/Doctorcard';

const DoctorlistScreen = ({navigation}) => {
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
    <Doctorcard item={item} navigation={navigation}/>
  );

  return (
    <View style={{flex: 1, padding: 10, backgroundColor:'#12423D'}}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
export default DoctorlistScreen;
