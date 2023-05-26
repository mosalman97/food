import {StyleSheet} from 'react-native';
import React from 'react';

// screens
import Home from '../screens/Home';

// packages
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meals" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="More" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
