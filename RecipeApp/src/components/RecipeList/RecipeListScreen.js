import React from 'react';
import styles from './_style';
import RecipeList from '../CustomComponent/RecipeListComponent/RecipeListComponentContainer';
import imgHeader from '../../asset/header.png';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import imgBack from '../../asset/back.png';
import {Shadow} from 'react-native-shadow-2';
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
        <Shadow>
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
          </TouchableOpacity>
        </Shadow>
      </View>
      <View style={{flex: 1}}>
        <RecipeList navigation={navigation} route={route} />
      </View>
    </SafeAreaView>
  );
};
