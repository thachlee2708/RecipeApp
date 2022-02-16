import React, {useEffect} from 'react';
import RecipeList from '../components/RecipeListComponent';
import imgHeader from '../asset/header.png';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import imgBack from '../asset/back.png';
export default RecipeListScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFD7A'}}>
      <View>
        <StatusBar
          hidden={false}
          backgroundColor="#FFFD7A"
          barStyle="dark-content"
        />
      </View>
      <View style={{position: 'absolute'}}>
        <ImageBackground
          source={imgHeader}
          style={styles.header}
          resizeMode="contain">
          <Text style={styles.headerText}>CATEGORY</Text>
        </ImageBackground>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: 'flex-end',
          height: 50,
          marginRight: 25,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            alignItems: 'center',
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 180,
          }}>
          <Image
            source={imgBack}
            resizeMode="contain"
            style={{
              width: 17,
              height: 17,
              tintColor: '#009245',
            }}
          />
          <Image />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <RecipeList navigation={navigation} route={route} />
      </View>
    </SafeAreaView>
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
