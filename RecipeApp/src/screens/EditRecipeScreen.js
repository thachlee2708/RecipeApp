import React from 'react';
import imgBack from '../asset/back.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
const width = Dimensions.get('screen').width;
export default EditScreen = ({navigation, route}) => {
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
  const twoOptionAlertHandler = () => {
    Alert.alert(
      //title
      'Cảnh báo',
      //body
      'Tên công việc không được để trống!!!',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };
  const saveData = () => {
    if (foodName === '') return twoOptionAlertHandler();
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
      <ScrollView>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => changePhoto()}>
          <Image
            source={foodPhoto}
            style={{
              height: width * 0.9,
              width: width * 0.9,
              alignSelf: 'center',
              borderWidth: 8,
              borderRadius: 180,
              borderColor: 'white',
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
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
          <Text>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD7A',
    padding: 10,
  },
  imgButton: {
    margin: 0,
    padding: 0,
  },
  textInput: {
    fontSize: 20,
    borderWidth: 0.8,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#8cc631',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 60,
    marginVertical: 20,
    alignItems: 'center',
  },
});
