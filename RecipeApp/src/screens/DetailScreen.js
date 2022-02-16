import React from 'react';
import imgBack from '../asset/back.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  AsyncStorage,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default DetailScreen = ({navigation, route}) => {
  const {id, image, name, ingredients, steps, category, refreshData} =
    route.params;
  const [foodName, setFoodName] = useState(name);
  const [foodPhoto, setFoodPhoto] = useState(image);
  const [foodIngredients, setFoodIngredients] = useState(ingredients);
  const [foodSteps, setFoodSteps] = useState(steps);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused;
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    const dataReceive = await AsyncStorage.getItem(category);
    console.log('dataReceive', dataReceive);
    setData(JSON.parse(dataReceive));
  };

  const saveData = () => {
    for (a in data) {
      if (data[a].id === id) {
        data[a].name = foodName;
        data[a].image = foodPhoto;
        data[a].ingredients = foodIngredients;
        data[a].steps = foodSteps;
      }
    }
    AsyncStorage.setItem(category, JSON.stringify(data));
    refreshData();
    navigation.navigate('RecipeListScreen', {category: category});
  };
  const changePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      console.log(response);
      let source = {uri: response.uri};
      setFoodPhoto(source);
    });
  };
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
        <Image
          source={foodPhoto}
          style={{
            height: 300,
            width: 300,
            alignSelf: 'center',
            borderWidth: 8,
            borderRadius: 180,
            borderColor: 'white',
          }}
          resizeMode="cover"
        />
        <Text style={styles.text}>Name:</Text>
        <Text style={styles.textInput} onChangeText={setFoodName}>
          {foodName}
        </Text>
        <Text style={styles.text}>Ingredients:</Text>
        <Text
          style={styles.textInput}
          multiline={true}
          onChangeText={setFoodIngredients}>
          {foodIngredients}
        </Text>
        <Text style={styles.text}>Steps:</Text>
        <Text
          style={styles.textInput}
          onChangeText={setFoodSteps}
          multiline={true}>
          {foodSteps}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#FFFD7A',
    padding: 10,
  },
  imgButton: {
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 60,
    marginVertical: 20,
    alignItems: 'center',
  },
});
