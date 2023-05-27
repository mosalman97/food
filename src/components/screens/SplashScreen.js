import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React from 'react';

// constants
import {Fonts, SIZE} from '../constants/Constants';

const SplashScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.imageStyle}>
          <Text style={styles.textStyle}>IROID</Text>
        </ImageBackground>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: SIZE(34),
    fontFamily: Fonts.shuriken,
    color: '#000000',
  },
});
