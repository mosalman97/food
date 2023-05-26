import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// constants
import {Fonts, SIZE} from '../constants/Constants';

// packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollStyle}
          extraScrollHeight={20}
          keyboardShouldPersistTaps="handled">
          <View style={styles.topView}>
            <Text style={styles.signText}>sign in</Text>
            <Text style={styles.detailText}>enter your details</Text>
          </View>
          <View style={styles.middleView}>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor={'#B6B7B7'}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#B6B7B7'}
            />
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
              <Text style={styles.buttonText}>sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.accountText}>
                Don't have an Account?
                <Text style={styles.highlightText}> Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  skipText: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: '#4A4B4D',
    textTransform: 'capitalize',
    textAlign: 'right',
    paddingRight: SIZE(33),
    paddingTop: SIZE(26),
  },
  scrollStyle: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: SIZE(34),
  },
  topView: {
    alignItems: 'center',
    marginBottom: SIZE(25),
  },
  signText: {
    fontSize: 30,
    fontFamily: Fonts.bold,
    color: '#000000',
    textTransform: 'capitalize',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#7C7D7E',
    textTransform: 'capitalize',
  },
  middleView: {
    marginBottom: SIZE(20),
  },
  input: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    fontFamily: Fonts.light,
    borderRadius: 28,
    color: '#000000',
    paddingLeft: SIZE(34),
    paddingTop: SIZE(17),
    paddingBottom: SIZE(16),
    marginBottom: SIZE(20),
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#3BB0EC',
    borderRadius: 28,
    paddingTop: SIZE(17),
    paddingBottom: SIZE(16),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  bottomView: {
    alignItems: 'center',
  },
  forgotButton: {
    marginBottom: SIZE(15),
  },
  forgotText: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: '#444444',
  },
  accountText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#7C7D7E',
  },
  highlightText: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: '#5DA7A3',
  },
});
