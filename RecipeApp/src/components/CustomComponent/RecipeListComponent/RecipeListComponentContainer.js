import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import ItemRecipeListComponentContainer from './ItemRecipeListComponent/ItemRecipeListComponentContainer';
import {useIsFocused} from '@react-navigation/core';
import dataDefault from '../../../data/DataDefault';
import RecipeListComponent from './RecipeListComponent';
export default RecipeList = ({navigation, route}) => {
  const {category} = route.params;
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [emptyText, setEmptyText] = useState('');
  // Sort data
  data.sort(function (a, b) {
    return parseInt(a.id) > parseInt(b.id);
  });
  const filterData = () => {
    let data1 = [];
    for (let x in dataTemp)
      if (dataTemp[x].name.toLowerCase().includes(searchText.toLowerCase()))
        data1.push(dataTemp[x]);
    setData(data1);
  };
  const isFocused = useIsFocused;
  useEffect(() => {
    getData();
    setTimeout(function () {
      setEmptyText('Empty List');
    }, 500);
  }, [isFocused]);
  useEffect(() => {
    filterData();
  }, [searchText]);
  const getData = async () => {
    let data1 = [];
    try {
      const obj = await AsyncStorage.getItem(category);
      const objConverted = JSON.parse(obj);
      if (objConverted !== null) data1.push(...objConverted);
      if (category === 'Soup' && objConverted === null) {
        data1.push(...dataDefault);
        AsyncStorage.setItem(category, JSON.stringify(dataDefault));
      }
      setData(data1);
      setDataTemp(data1);
      console.log(obj);
    } catch (error) {
      console.error(error);
    }
  };
  const refreshData = async () => {
    let data1 = [];
    try {
      const obj = await AsyncStorage.getItem(category);
      const objConverted = JSON.parse(obj);
      if (objConverted !== null) data1.push(...objConverted);
      if (category === 'Soup' && objConverted === null) {
        data1.push(...dataDefault);
        AsyncStorage.setItem(category, JSON.stringify(data1));
      }
      setData(data1);
      setDataTemp(data1);
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = ({item}) => {
    return (
      <ItemRecipeListComponentContainer
        {...{item, navigation, data, setData, category, refreshData}}
      />
    );
  };
  const recipeListComponentProps = {
    navigation,
    category,
    refreshData,
    searchText,
    setSearchText,
    data,
    dataTemp,
    emptyText,
    renderItem,
  };
  return <RecipeListComponent {...recipeListComponentProps} />;
};
