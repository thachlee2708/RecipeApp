import React from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import {launchImageLibrary} from 'react-native-image-picker';
import imgCamera from '../../asset/camera.png';
import dataDefault from '../../data/DataDefault';
import AddRecipeScreen from './AddRecipeScreen';
export default AddRecipeContainer = ({navigation, route}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(imgCamera);
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const {category, refreshData} = route.params;
  const [arrTemp, setArrTemp] = useState([]);
  let arrData = [];
  const isFocused = useIsFocused;
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    const dataReceive = await AsyncStorage.getItem(category);
    console.log('dataReceive', dataReceive);
    if (dataReceive !== null) arrData = JSON.parse(dataReceive);
    if (category === 'Soup' && dataReceive === null)
      arrData = dataDefault.slice();
    setArrTemp(arrData);
    const ids = arrData.map(function (i) {
      return Number(i.id);
    });
    console.log('ids ', ids);
    setId(ids.length !== 0 ? Math.max(...ids) + 1 : 0);
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
    if (name === '') return twoOptionAlertHandler();
    arrTemp.push({
      id: id,
      name: name,
      image: photo,
      ingredients: ingredients,
      steps: steps,
    });
    AsyncStorage.setItem(category, JSON.stringify(arrTemp));
    arrData = [];
    refreshData();
    navigation.navigate('RecipeListScreen', {category: category});
  };
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      console.log(response);
      let source = {uri: response.uri};
      setPhoto(source);
    });
  };
  const addRecipeProps = {
    navigation,
    setName,
    photo,
    setIngredients,
    setSteps,
    category,
    handleChoosePhoto,
    saveData,
  };
  return <AddRecipeScreen {...addRecipeProps} />;
};
