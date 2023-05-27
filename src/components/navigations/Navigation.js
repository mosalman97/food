import React, {useState, useEffect} from 'react';

// screens
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import TabNavigation from './TabNavigation';

// packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 800);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Tab">
        {isActive ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tab" component={TabNavigation} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
