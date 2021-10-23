import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Studentcard from '../Components/Studentcard';

const StudentlistScreen = ({navigation}) => {
  const DATA = [
    {
      name: 'Jesse',
      lastname: 'Pinkman',
      age: 20,
      studentcode: '0024486884',
      image:
        'https://static2.srcdn.com/wordpress/wp-content/uploads/2021/01/Breaking-Bad-Jesse-Pinkman-teeth-smile.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5',
      scores: [
        {
          course: 'chemistry',
          score: 19,
        },
        {
          course: 'physics',
          score: 20,
        },
        {
          course: 'math',
          score: 18,
        },
        {
          course: 'algebra',
          score: 17,
        },
        {
          course: 'history',
          score: 16,
        },
        {
          course: 'sports',
          score: 20,
        },
      ],
    },
    {
      name: 'Will',
      lastname: 'Hunting',
      age: 20,
      studentcode: '747515758',
      image:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-good-will-hunting-matt-damon.jpg',
      scores: [
        {
          course: 'chemistry',
          score: 5,
        },
        {
          course: 'physics',
          score: 17,
        },
        {
          course: 'math',
          score: 12,
        },
        {
          course: 'algebra',
          score: 19,
        },
        {
          course: 'history',
          score: 13,
        },
        {
          course: 'sports',
          score: 14,
        },
      ],
    },
    {
      name: 'Chandler',
      lastname: 'bing',
      age: 20,
      studentcode: '009874232',
      image:
        'https://www.tyla.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.tyla.com%2Fs3%2Fcontent%2Fc6628e066050f6338af101ba61956210.png',
      scores: [
        {
          course: 'chemistry',
          score: 15,
        },
        {
          course: 'physics',
          score: 19,
        },
        {
          course: 'math',
          score: 16,
        },
        {
          course: 'algebra',
          score: 17,
        },
        {
          course: 'history',
          score: 20,
        },
        {
          course: 'sports',
          score: 18,
        },
      ],
    },
    {
      name: 'Ross',
      lastname: 'Geller',
      age: 20,
      studentcode: '009577812',
      image:
        'https://www.eightieskids.com/wp-content/uploads/2020/02/friends-35-e1621932838521.png',
      scores: [
        {
          course: 'chemistry',
          score: 18.5,
        },
        {
          course: 'physics',
          score: 9,
        },
        {
          course: 'math',
          score: 15,
        },
        {
          course: 'algebra',
          score: 12,
        },
        {
          course: 'history',
          score: 11,
        },
        {
          course: 'sports',
          score: 8,
        },
      ],
    },
  ];

  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map(item => {
          return (
            <Studentcard navigation={navigation} item={item}/>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:'#1A5276'
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D4E6F1',
    marginBottom: 10,
    height: 200,
    borderRadius: 15,
    padding: 10,
  },
  container2: {
    justifyContent: 'space-between',
    backgroundColor: '#D4E6F1',
  },
  container3: {
    height: 60,
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF5FB',
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
  },
  text1: {
    fontSize: 12,
  },
});
export default StudentlistScreen;
