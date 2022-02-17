import React from 'react';
import styles from './_style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import imgEdit from '../../../../asset/edit.png';
import imgDelete from '../../../../asset/delete.png';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
export default ItemRecipeListComponent = ({
  navigation,
  item,
  twoOptionAlertHandler,
  category,
  refreshData,
}) => {
  const objItem = {
    category: category,
    id: item.id,
    image: item.image,
    name: item.name,
    ingredients: item.ingredients,
    steps: item.steps,
    refreshData: refreshData,
  };
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('DetailScreen', objItem);
      }}>
      <LinearGradient
        style={styles.item}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#009245', '#8cc631']}>
        <View>
          <FastImage source={item.image} style={styles.image} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditScreen', objItem);
          }}
          style={styles.wrapIcon}>
          <Image source={imgEdit} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => twoOptionAlertHandler()}
          style={styles.wrapIcon}>
          <Image source={imgDelete} style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};
