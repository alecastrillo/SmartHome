import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';



import LoginPage from './screens/login';
import MainPage from './screens/main-window'
import LightPage from './screens/light-control';
import RGBPage from './screens/rgb-strip';


const MainNavigator = createStackNavigator({
  Login: { screen: LoginPage},
  Main: { screen: MainPage },
  Light: { screen: LightPage },
  RGBStrip: { screen: RGBPage }
})

const App = createAppContainer(MainNavigator);
export default App


