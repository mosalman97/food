import {StyleSheet, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/components/screens/SplashScreen';
import Login from './src/components/screens/Login';

const App = () => {
  return (
    <View>
      {/* <SplashScreen /> */}
      <Login />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
