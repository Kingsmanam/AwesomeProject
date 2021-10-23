import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import StudentlistScreen from './StudentlistScreen';
import StudentScreen from './StudentScreen';
import DoctorlistScreen from './DoctorlistScreen';
import DoctorScreen from './DoctorScreen';
const Stack = createNativeStackNavigator();
const NavigationalStudentlist = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Studentlist"
          component={StudentlistScreen}
          options={{
            headerStyle: {backgroundColor: '#1A5276'}, headerTintColor :'white'
          }}
        />
        <Stack.Screen name="Studentcard" component={StudentScreen} />
        <Stack.Screen
          name="Doctorlist"
          component={DoctorlistScreen}
          options={{
            headerStyle: {backgroundColor: '#12423D'}, headerTintColor :'white'
          }}
        />
        <Stack.Screen name="DoctorProfile" component={DoctorScreen}/>
        {/* <Stack.Screen name="Digikala" component={DigikalaScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationalStudentlist;
