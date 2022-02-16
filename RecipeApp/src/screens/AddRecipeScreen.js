import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  AsyncStorage,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import {launchImageLibrary} from 'react-native-image-picker';
import imgCamera from '../asset/camera.png';
import imgBack from '../asset/back.png';
import dataDefault from '../data/DataDefault';
const height = Dimensions.get('screen').height;
export default AddRecipeScreen = ({navigation, route}) => {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD7A',
  },
  scroll: {
    marginHorizontal: 10,
    height: height,
  },
  text: {fontSize: 25, marginVertical: 10, color: 'black'},
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonSaveText: {
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
});
