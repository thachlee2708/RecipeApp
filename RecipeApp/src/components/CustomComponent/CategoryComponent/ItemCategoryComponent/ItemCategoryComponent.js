import React from 'react';
import styles from '../_style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import imgNext from '../../../../asset/next.png';

export default ItemCategory = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('RecipeListScreen', {category: item.name})
      }>
      <LinearGradient
        style={styles.item}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#009245', '#8cc631']}>
        <View>
          <FastImage source={item.image} style={styles.image} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image
          source={imgNext}
          style={{
            width: 30,
            height: 30,
            tintColor: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: 10,
          }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};
