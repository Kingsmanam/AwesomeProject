import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const APIfetch = () => {
  const [data, setData] = useState([]);

  const getMoviesFromApi = () => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        setData(json.movies);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  if (data.length < 1) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={{flex: 1, padding: 24}}>
      {data.map((item,index) => {
        return (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        );
      })}
    </View>
  );
};
export default APIfetch;
