import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

// assets
import HeaderIcon from '../../assets/icons/notif.svg';
import ArrowIcon from '../../assets/icons/darkarrow.svg';

// constants
import {deviceHeight, Fonts, SIZE} from '../constants/Constants';

const Home = () => {
  const statusBarHeight = StatusBar.currentHeight;

  // menuItems
  const menuItems = [
    {
      id: 1,
      title: 'Weight Loss',
      image: require('../../assets/images/foodone.png'),
    },
    {
      id: 2,
      title: 'Weight Gain',
      image: require('../../assets/images/foodtwo.png'),
    },
    {
      id: 3,
      title: 'Weight Loss',
      image: require('../../assets/images/foodthree.png'),
    },
  ];

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={[
          styles.header,
          {
            paddingTop: statusBarHeight,
          },
        ]}>
        <Text style={styles.headerText}>IROID</Text>
        <View style={styles.headerIcon}>
          <HeaderIcon width={'100%'} height={'100%'} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.bannerView}>
          <View style={styles.bannerImage}>
            <Image
              source={require('../../assets/images/imageone.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.dotView}>
            <View style={styles.dot}></View>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: '#5DA7A3',
                  marginHorizontal: SIZE(5),
                },
              ]}></View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <View style={styles.imageView} key={item.id}>
              <Image source={item.image} style={styles.imageStyle} />
              <View style={styles.transparentView}>
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
              <View style={styles.roundView}>
                <ArrowIcon style={styles.arrowStyle} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#3BB0EC',
    paddingBottom: SIZE(18),
    paddingHorizontal: SIZE(20),
  },
  headerText: {
    fontSize: 34,
    fontFamily: Fonts.shuriken,
    color: '#FFFFFF',
  },
  headerIcon: {
    width: SIZE(24),
    height: SIZE(24),
    marginLeft: SIZE(88),
  },
  container: {
    paddingHorizontal: SIZE(20),
    backgroundColor: '#fff',
  },
  bannerView: {
    paddingTop: SIZE(19),
    marginBottom: SIZE(20),
  },
  bannerImage: {
    width: '100%',
    height: SIZE(167),
    marginBottom: SIZE(10),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 13,
  },
  dotView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: SIZE(10),
    height: SIZE(10),
    backgroundColor: '#D1D1D152',
    borderRadius: 100,
  },
  imageView: {
    width: '100%',
    height: SIZE(145),
    marginBottom: SIZE(38),
  },
  transparentView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SIZE(37),
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: '#929292',
    opacity: 0.81,
    justifyContent: 'center',
  },
  imageText: {
    fontSize: SIZE(14),
    fontFamily: Fonts.bold,
    textTransform: 'capitalize',
    color: '#FFFFFF',
    paddingLeft: SIZE(20),
  },
  roundView: {
    width: SIZE(40),
    height: SIZE(40),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 3,
    position: 'absolute',
    bottom: SIZE(-18),
    right: SIZE(20),
  },
  arrowStyle: {
    transform: [{rotate: '90deg'}],
  },
});
