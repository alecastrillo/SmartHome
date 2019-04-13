import React from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';


import LoginPage2 from './screens/login2';
import MainPage from './screens/main-window';
import RoomsTab from './screens/rooms';
import LightPage from './screens/light-control';
import RGBPage from './screens/rgb-strip';


const MainTabNavigator = createMaterialTopTabNavigator({
    GridView: { screen: MainPage},
    Rooms: { screen: RoomsTab},
    //  Settings: SettingsScreen,
  },
  {
    inactiveTintColor: '#FFFFFF',
    
    tabBarOptions: {
      activeTintColor: 'white',
      //inactiveTintColor: '#f7f7f7',
      labelStyle: {
        fontSize: 17,
      },
      tabStyle: {
        height: 70,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
      style: {
        backgroundColor: '#00b386',
        marginTop: 20
    },
    /*
    tabBarOptions: { 
      inactiveTintColor: '#FFFFFF',
      //showIcon: true,
      lazy: true,      
      //activeTintColor: '#7567B1',
      labelStyle: {
        fontSize: 16,
        fontWeight: '600'
      },
      style: { 
        backgroundColor: 'white',
      },*/
    }
  },
);

const MainNavigator = createStackNavigator({
  //TabsWindow: { screen: TabsPage },
  Login2: { screen: LoginPage2,
    navigationOptions:{
      header: null,
    }
  },
  Main: { screen: MainTabNavigator,
    navigationOptions:{
      header: null,
    } 
  },
  //Main: { screen: MainPage },
  //Login: { screen: LoginPage},
  Light: { screen: LightPage },
  RGBStrip: { screen: RGBPage }
});

/*
const styles = StyleSheet.create({
  topTabBar: {
    backgroundColor: 'white',
      
  },
});
*/
const App = createAppContainer(MainNavigator);

export default App


