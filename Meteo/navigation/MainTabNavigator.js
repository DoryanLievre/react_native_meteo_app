import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-partly-sunny${focused ? '' : '-outline'}`
          : 'md-partly-sunny'
      }
    />
  ),
};

HomeStack.path = '';


const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: 'About me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

AboutStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AboutStack,
});

tabNavigator.path = '';

export default tabNavigator;
