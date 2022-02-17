import React from 'react';
import styles from './_style';
import Category from '../CustomComponent/CategoryComponent/CategoryComponentContainer';
import imgHeader from '../../asset/header.png';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
export default HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFD7A'}}>
      <StatusBar
        hidden={false}
        backgroundColor="#FFFD7A"
        barStyle="dark-content"
      />
      <ImageBackground
        source={imgHeader}
        style={styles.header}
        resizeMode="contain">
        <Text style={styles.headerText}>CATEGORY</Text>
      </ImageBackground>
      <View style={{flex: 1}}>
        <Category navigation={navigation} />
      </View>
    </View>
  );
};
