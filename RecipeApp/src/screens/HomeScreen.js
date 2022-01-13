import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Category from '../components/CategoryComponent';

import imgHeader from '../asset/header.png';
import imgBack from '../asset/back.png';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={imgHeader}
            style={styles.imageBackground}
            resizeMode="contain"
          >
            <Text style={styles.title}>CATEGORY</Text>
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <Category {...this.props} />
        </View>
      </View>
    )
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    position: 'absolute'
  },
  body: {
    flex: 1,
    marginTop: width * 0.4,
    paddingHorizontal: 30
  },
  imageBackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 25
  },
});