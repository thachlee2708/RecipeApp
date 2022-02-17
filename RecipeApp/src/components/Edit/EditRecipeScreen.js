import React from 'react';
import styles from './_style';
import imgBack from '../../asset/back.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
const width = Dimensions.get('screen').width;
export default EditScreen = ({
  navigation,
  setFoodName,
  setFoodIngredients,
  setFoodSteps,
  saveData,
  changePhoto,
  foodPhoto,
  foodName,
  foodIngredients,
  foodSteps,
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
      <ScrollView>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={styles.imgButton}
            onPress={() => changePhoto()}>
            <Shadow>
              <Image
                source={foodPhoto}
                style={styles.foodPhoto}
                resizeMode="cover"
              />
            </Shadow>
          </TouchableOpacity>
        </View>
        <Text>Name:</Text>
        <TextInput style={styles.textInput} onChangeText={setFoodName}>
          {foodName}
        </TextInput>
        <Text>Ingredients:</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={setFoodIngredients}>
          {foodIngredients}
        </TextInput>
        <Text>Steps:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setFoodSteps}
          multiline={true}>
          {foodSteps}
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={() => saveData()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
