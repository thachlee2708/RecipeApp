import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import dataDefault from '../data/DataDefault';

import imgEdit from '../asset/edit.png';
import imgDelete from '../asset/delete.png';
import imgCancel from '../asset/cancel.png';
import imgAdd from '../asset/plus.png';
import imgRecipe from '../asset/recipe.png';

const width = Dimensions.get('screen').width;

export default class RecipeListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_temp: [],
      search: '',
    };
  }

  id = 3;

  renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.item}>
        <View style={styles.image_container}>
          <FastImage source={item.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.contentButton}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DetailScreen', {
                image: item.image,
                name: item.name,
                ingredienrts: item.ingredienrts,
                steps: item.steps,
              })
            }
            style={styles.buttonNext}>
            <Text style={{fontWeight: 'bold', color: 'green'}}>START</Text>
          </TouchableOpacity>
          <View style={styles.contentEdit}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('EditRecipeScreen', {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  ingredienrts: item.ingredienrts,
                  steps: item.steps,
                  categoryName: this.props.navigation.state.params.name,
                  refresh: this.refreshData,
                })
              }
              style={[styles.button, {marginRight: 10}]}>
              <Image
                source={imgEdit}
                style={{width: 15, height: 15, tintColor: 'gray'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.alertDelete(item.id, item.name)}
              style={styles.button}>
              <Image
                source={imgDelete}
                style={{width: 18, height: 18, tintColor: 'red'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  };

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 10,
        }}
      />
    );
  };

  _search(text) {
    let data = [];
    this.state.data_temp.map(function (value) {
      if (value.name.indexOf(text) > -1) {
        data.push(value);
      }
    });
    this.setState({
      data: data,
      search: text,
    });
  }

  alertDelete(index, foodName) {
    Alert.alert(
      'Recipe',
      'Delete the recipe ' + foodName + ' ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => this.delete(index),
        },
      ],
      {cancelable: false},
    );
  }

  async delete(index) {
    var arrTemp = this.state.data;
    const {name} = this.props.navigation.state.params;
    arrTemp = arrTemp.filter(e => e.id != index);
    await AsyncStorage.setItem(name, JSON.stringify(arrTemp));
    this.setState({
      data: JSON.parse(await AsyncStorage.getItem(name)),
    });
    console.log('DELETE', this.state.data);
  }

  async componentDidMount() {
    const {name} = this.props.navigation.state.params;

    if (name == 'Soup') {
      console.log('AAA', name);
      this.setState({
        data: JSON.parse(await AsyncStorage.getItem(name)) || dataDefault,
        data_temp: JSON.parse(await AsyncStorage.getItem(name)) || dataDefault,
      });
    } else {
      this.setState({
        data: JSON.parse(await AsyncStorage.getItem(name)) || [],
        data_temp: JSON.parse(await AsyncStorage.getItem(name)) || [],
      });
    }
  }

  refreshData = async () => {
    const {name} = this.props.navigation.state.params;
    this.setState({
      data: JSON.parse(await AsyncStorage.getItem(name)) || dataDefault,
      data_temp: JSON.parse(await AsyncStorage.getItem(name)) || dataDefault,
    });
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#009245', '#8cc631']}
          style={styles.buttonAdd}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('AddRecipeScreen', {
                image: this.props.navigation.state.params.image,
                name: this.props.navigation.state.params.name,
                refresh: this.refreshData,
              })
            }
            style={{paddingHorizontal: 10, alignItems: 'center'}}>
            <Image
              source={imgAdd}
              style={{width: 25, height: 25, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.section}>
          <TextInput
            placeholder="Search.."
            style={{flex: 1, marginLeft: 10}}
            value={this.state.search}
            onChangeText={text => this._search(text)}
          />
          <TouchableOpacity
            onPress={() => this._search('')}
            style={{paddingHorizontal: 10}}>
            <Image source={imgCancel} style={{width: 12, height: 12}} />
          </TouchableOpacity>
        </View>

        <View style={styles.flatList}>
          {data.length <= 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={imgRecipe}
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 10,
                  tintColor: 'gray',
                  marginBottom: 20,
                }}
              />
              <Text style={{fontSize: 20, color: 'gray', margin: 10}}>
                List of empty recipes
              </Text>
            </View>
          ) : (
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 2,
    paddingHorizontal: 10,
  },
  contentButton: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  contentEdit: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNext: {
    width: 55,
    height: 25,
    backgroundColor: 'yellow',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    width: 45,
    paddingVertical: 10,
    borderRadius: 100,
    marginLeft: 310,
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
});
