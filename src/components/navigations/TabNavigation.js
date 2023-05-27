import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// assets
import HomeIcon from '../../assets/icons/home.svg';
import MealIcon from '../../assets/icons/meal.svg';
import UserIcon from '../../assets/icons/user.svg';
import MoreIcon from '../../assets/icons/more.svg';

// constants
import {Fonts, SIZE} from '../constants/Constants';

// screens
import Home from '../screens/Home';

// packages
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          height: SIZE(65),
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingTop: SIZE(8),
          paddingBottom: SIZE(7),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View style={styles.iconView}>
                <HomeIcon width={'100%'} height={'100%'} />
              </View>
            );
          },
          tabBarLabel: ({focused}) => {
            return focused ? (
              <Text style={styles.labletextlight}>home</Text>
            ) : (
              <Text style={styles.labelText}>home</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Meals"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View style={styles.iconView}>
                <MealIcon width={'100%'} height={'100%'} />
              </View>
            );
          },
          tabBarLabel: ({focused}) => {
            return focused ? (
              <Text style={styles.labletextlight}>meals</Text>
            ) : (
              <Text style={styles.labelText}>meals</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View style={styles.iconView}>
                <UserIcon width={'100%'} height={'100%'} />
              </View>
            );
          },
          tabBarLabel: ({focused}) => {
            return focused ? (
              <Text style={styles.labletextlight}>profile</Text>
            ) : (
              <Text style={styles.labelText}>profile</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View style={styles.iconView}>
                <MoreIcon width={'100%'} height={'100%'} />
              </View>
            );
          },
          tabBarLabel: ({focused}) => {
            return focused ? (
              <Text style={styles.labletextlight}>more</Text>
            ) : (
              <Text style={styles.labelText}>more</Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconView: {
    width: SIZE(20),
    height: SIZE(20),
  },
  labelText: {
    fontSize: SIZE(10),
    color: '#949494',
    fontFamily: Fonts.semiBold,
    textTransform: 'capitalize',
    marginTop: SIZE(4),
  },
  labletextlight: {
    fontSize: SIZE(10),
    color: '#3BB0EC',
    fontFamily: Fonts.semiBold,
    textTransform: 'capitalize',
    marginTop: SIZE(4),
  },
});
