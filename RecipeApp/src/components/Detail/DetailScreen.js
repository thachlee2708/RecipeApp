import React from 'react';
import styles from './_style';
import imgBack from '../../asset/back.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, ScrollView, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
export default DetailScreen = ({
  navigation,
  name,
  image,
  ingredients,
  steps,
  category,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{paddingBottom: 5}}
        onPress={() =>
          navigation.navigate('RecipeListScreen', {category: category})
        }>
        <Image source={imgBack} style={{height: 20, width: 20, margin: 10}} />
      </TouchableOpacity>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            alignSelf: 'center',
            margin: 10,
          }}>
          <Shadow>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </Shadow>
        </View>
        <Text style={styles.text}>Name:</Text>
        <Text style={styles.textInput}>{name}</Text>
        <Text style={styles.text}>Ingredients:</Text>
        <Text style={styles.textInput} multiline={true}>
          {ingredients}
        </Text>
        <Text style={styles.text}>Steps:</Text>
        <Text style={styles.textInput} multiline={true}>
          {steps}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
