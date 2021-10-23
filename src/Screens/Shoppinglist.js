import React, {useRef, useState,useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Counter from './Counter';


const shoppinglist = () => {
  const [tittle, settittle] = useState("");
  const [price, setprice] = useState();
  const [notes, setnotes] = useState([]);
  const [sum, setsum] = useState(0)
  const [TotalPrice, setTotalPrice]  = useState(0)
  const textinput1 = useRef();
  const textinput2 = useRef();
  const onChangeText1 = (value) => {
   settittle(value)
  };
  const onChangeText2 = (value) => {
    setprice(value)
  };

  const onPress = () => {
    let temp = [...notes ,{tittle,price}];
    setnotes(temp);   
    textinput1.current.clear();
    textinput2.current.clear(); 
  };

  const calcSum = (value,operation,index) => {
    if(operation=="+") {    
      setsum(sum + value)
      let temp = TotalPrice + (notes[index].price * value);
      setTotalPrice(temp) 
    } else {
      setsum(sum - value)
      let temp = TotalPrice + (notes[index].price * value);
      setTotalPrice(temp)   
  }  
};

  const def = (value) =>{
      setsum(sum + value)
      let temp = TotalPrice + (price * value);
      setTotalPrice(temp)
};

  const renderItem = ({item,index}) => (
    <View
      style={{
        height: 60,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems:'center',
        margin: 10,
        backgroundColor: '#FF7C60',
        padding: 10,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 15,}}>{item.price}</Text>
      <Text style={{fontSize: 15,}}>{item.tittle}</Text>
    <Counter mycolor="blue" calcSum={calcSum}  def={def} index={index}  mycount={1}  myborderradious={15}/>
    </View>
  );

  return (
    <SafeAreaView
      style={{padding: 10, justifyContent: 'space-between', flex: 1}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Shoppinglist</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'green'}}>TotalCount:{sum}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'green'}}>TotalPrice:{TotalPrice}</Text>
      </View>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
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
            borderRadius: 8, marginRight:5
          }}
          onChangeText={onChangeText1}
          ref={textinput1}
          placeholder="عنوان"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            flex: 1,
            height: 50,
            borderColor: '#212121',
            borderWidth: 1,
            borderRadius: 8,
          }}

          onChangeText={onChangeText2}
          ref={textinput2}
          placeholder="قیمت"
          keyboardType={'numeric'}
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

export default shoppinglist;
