import React from 'react';
import {Alert, AsyncStorage} from 'react-native';
import EditRecipeScreen from './EditRecipeScreen';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
export default EditRecipeContainer = ({navigation, route}) => {
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
  const editProps = {
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
  };
  return <EditRecipeScreen {...editProps} />;
};
