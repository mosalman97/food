import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

// constants
import {Fonts, SIZE} from '../constants/Constants';

// packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const toast = useToast(); // toast

  const handleLogin = () => {
    setButtonLoading(true);
    if (email && password) {
      const data = {
        email: 'shak@gmail.com',
        password: 12345,
        lang_id: 'en',
        device_token: 'sss',
      };
      axios
        .post('http://proteinium.iroidtechnologies.in/api/v1/login', data)
        .then(response => {
          setButtonLoading(false);
          navigation.navigate('Tab');
        })
        .catch(error => {
          setButtonLoading(false);
          console.log(error);
        });
    } else {
      setButtonLoading(false);
      toast.show('Enter email & password!', {
        type: 'normal',
      });
    }
  };
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollStyle}
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
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#B6B7B7'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.signInButton}
              activeOpacity={0.8}
              onPress={handleLogin}>
              {buttonLoading ? (
                <ActivityIndicator size={'small'} color={'white'} />
              ) : (
                <Text style={styles.buttonText}>sign in</Text>
              )}
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
    marginBottom: SIZE(15),
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
    color: 'black',
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
