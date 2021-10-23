/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/Screens/App';
import {name as appName} from './app.json';
// import Counter from './src/Components/Counter'
// import Todolist from './src/Screens/Todolist';
// import Calculator from './src/Screens/Calculator'
// import Shoppinglist from './src/Screens/Shoppinglist'
// import Studentlist from './src/Screens/Studentlist'
// import APIfetch from './src/Screens/APIfetch'
// import Doctorlist from './src/Screens/Doctorlist'
// import Timer from './src/Screens/Timer'
import NavigationalStudentlist from './src/Screens/NavigationalStudentlist'
AppRegistry.registerComponent(appName, () =>NavigationalStudentlist);