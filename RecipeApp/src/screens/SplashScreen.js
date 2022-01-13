import React, { Component } from 'react';
import { StatusBar, Image, View, StyleSheet, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import logo from '../asset/logo.png'
StatusBar.setHidden(true);
export default class SplashScreen extends Component {
  render() {
    return (

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#009245', '#8cc631']}
        style={styles.container}
      >
        <Image
          source={logo}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />
        <Text style={styles.name}>R E C I P E</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  }
});
