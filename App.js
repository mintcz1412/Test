import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeScreen from './res/screens/WelcomeScreen';
import HomeScreen from './res/screens/HomeScreen';
import SearchScreen from './res/screens/SearchScreen';
import DetailsScreen from './res/screens/DetailsScreen';



  const HomeStack = {
    screen: createStackNavigator({
      home: HomeScreen,
      search: SearchScreen
    }),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="home" size={30} color={tintColor} />
      }
    }
  }

  const SearchStack = {
    screen: createStackNavigator({
      search: SearchScreen,
      detail: DetailsScreen 
    }),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="map-marker" size={30} color={tintColor} />
      }
    }
  };

  const App = createSwitchNavigator({
    welcome: WelcomeScreen,
    main: createBottomTabNavigator(
      {
        homeStack: HomeStack,
        searchStack: SearchStack,
      },
      {
        tabBarOptions: {
          showLabel: false
        }
      }
    )
  })

  export default createAppContainer(App);
