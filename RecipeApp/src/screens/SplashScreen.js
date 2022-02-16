import React from 'react';
import {Image, StatusBar, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../asset/logo.jpeg';
StatusBar.setHidden(true);
export default SplashScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FF0D00', '#F75527']}
      style={styles.linear}>
      <Image source={logo} style={styles.image}></Image>
      <Text style={styles.text}>R E C I P E</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linear: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    borderRadius: 180,
  },
  text: {
    fontStyle: 'italic',
    marginTop: 30,
    fontSize: 30,
    color: 'white',
  },
});
