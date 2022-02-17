import React from 'react';
import {AsyncStorage} from 'react-native';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import DetailScreen from './DetailScreen';
export default DetailContainer = ({navigation, route}) => {
  const {image, name, ingredients, steps, category} = route.params;
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
  const detailProps = {
    navigation,
    name,
    image,
    ingredients,
    steps,
    category,
  };
  return <DetailScreen {...detailProps} />;
};
