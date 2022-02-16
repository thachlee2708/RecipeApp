import React from 'react';
import Category from '../components/CategoryComponent';
import imgHeader from '../asset/header.png';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
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
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    height: 200,
    width: 200,
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 31,
    fontSize: 30,
  },
});
