import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import imgSoup from '../asset/soup.jpg';
import imgGrill from '../asset/grill.jpg';
import imgCamera from '../asset/camera.png';

var dataDefault = [
  {
    id: 1,
    name: 'Soup',
    image: imgSoup,
    ingredienrts: '',
    steps: '',
  },
  {
    id: 2,
    name: 'Grill',
    image: imgGrill,
    ingredienrts: '',
    steps: '',
  },
];

export default class AppRecipeComponent extends React.Component {
  state = {
    photoSource: null,
    data: dataDefault,
    foodName: '',
    ingredienrts: '',
    steps: '',
  };

  arr = dataDefault;
  id = 3;

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        let source = {uri: response.uri};
        this.setState({photoSource: source});
      }
    });
  };

  storeData = async () => {
    const {photoSource, foodName, ingredienrts, steps} = this.state;
    const {categoryName} = this.props;
    console.log('PHOTO', photoSource);
    console.log('CATEGORY', categoryName);

    this.arr.push({
      id: this.id,
      name: foodName,
      image: photoSource,
      ingredienrts: ingredienrts,
      steps: steps,
    });
    this.id++;
    await AsyncStorage.setItem(categoryName, JSON.stringify(this.arr));
    this.setState({
      data: JSON.parse(await AsyncStorage.getItem(categoryName)),
    });
    console.log('STORE', this.state.data);

    //this.props.callAddItemFunc();
  };

  async componentDidMount() {
    const {categoryName} = this.props;
    console.log('CATEGORY', 'AAAA');
    this.setState({
      data: JSON.parse(await AsyncStorage.getItem(categoryName)) || dataDefault,
    });
    this.arr =
      JSON.parse(await AsyncStorage.getItem(categoryName)) || dataDefault;
    this.id = this.arr[this.arr.length - 1].id + 1;
  }

  render() {
    const {photoSource} = this.state;
    return (
      <ScrollView>
        <Text style={styles.name}>Food name :</Text>
        <TextInput
          style={{
            height: 40,
            backgroundColor: 'azure',
            fontSize: 16,
            marginTop: 10,
          }}
          placeholder="What's your food name?"
          onChangeText={foodName => this.setState({foodName})}
        />
        <Text style={styles.name}>Food image :</Text>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {photoSource ? (
            <Image
              source={photoSource}
              style={{width: 400, height: 300, marginTop: 10}}
            />
          ) : (
            <Image
              source={imgSoup}
              style={{width: 400, height: 300, marginTop: 10}}
            />
          )}

          <TouchableOpacity
            onPress={this.handleChoosePhoto}
            style={{paddingHorizontal: 10}}>
            <Image
              source={imgCamera}
              style={{width: 30, height: 30, marginTop: 10}}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Ingredienrts :</Text>
        <TextInput
          multiline={true}
          onChangeText={ingredienrts => this.setState({ingredienrts})}
          value={this.state.ingredienrts}
          placeholder="What are the types of ingredients?"
          style={{
            height: 100,
            backgroundColor: 'azure',
            fontSize: 16,
            marginTop: 10,
          }}
        />

        <Text style={styles.name}>Steps :</Text>

        <TextInput
          multiline={true}
          onChangeText={steps => this.setState({steps})}
          value={this.state.steps}
          placeholder="How would you do it?"
          style={{
            height: 100,
            backgroundColor: 'azure',
            fontSize: 16,
            marginTop: 10,
          }}
        />

        <TouchableOpacity
          onPress={this.storeData}
          style={{
            paddingHorizontal: 10,
            backgroundColor: 'green',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={styles.button}>SAVE RECIPE</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  name: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
});
