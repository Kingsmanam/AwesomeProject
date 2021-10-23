import React, {useRef, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Counter from './Counter';
const Todolist = () => {
  const [note, setnote] = useState();
  const [notes, setnotes] = useState([]);
  const textinput = useRef();

  const onChangeText = value => {
    setnote(value);
  };
  const onPress = () => {
    let temp = [...notes];
    temp.push(note);
    setnotes(temp);
    textinput.current.clear();
  };
  const renderItem = ({item}) => (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#FF7C60',
        padding: 10,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 18, alignSelf:'center'}}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{padding: 10, justifyContent: 'space-between', flex: 1}}>
      <Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            flex: 1,
            height: 50,
            borderColor: '#212121',
            borderWidth: 1,
            borderRadius: 8,
          }}
          onChangeText={onChangeText}
          ref={textinput}
          placeholder="Type here..."
        />
        <TouchableOpacity
          style={{
            marginLeft: 8,
            height: 50,
            padding: 8,
            backgroundColor: '#212121',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}
          onPress={onPress}>
          <Text style={{color: '#fafafa'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Todolist;
