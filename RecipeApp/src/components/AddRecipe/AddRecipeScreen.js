import React from 'react';
import styles from './_style';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import imgBack from '../../asset/back.png';
export default AddRecipeScreen = ({
  navigation,
  setName,
  photo,
  setIngredients,
  setSteps,
  category,
  handleChoosePhoto,
  saveData,
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
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>Food name:</Text>
        <TextInput style={styles.textInput} onChangeText={setName} />
        <Text style={styles.text}>Food image:</Text>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => handleChoosePhoto()}>
          <Image
            source={photo}
            resizeMode="contain"
            style={{height: 100, width: 100}}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Ingredients:</Text>
        <TextInput
          onChangeText={setIngredients}
          style={styles.textInput}
          placeholder="What are the types of ingredients?"
          multiline={true}
        />
        <Text style={styles.text}>Steps:</Text>
        <TextInput
          placeholder="How would you do it?"
          onChangeText={setSteps}
          style={styles.textInput}
          multiline={true}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => saveData()}>
          <Text style={styles.buttonSaveText}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
