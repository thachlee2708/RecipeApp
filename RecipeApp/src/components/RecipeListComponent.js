import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  TextInput,
  AsyncStorage,
} from 'react-native';
import imgEdit from '../asset/edit.png';
import imgDelete from '../asset/delete.png';
import {useIsFocused} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import dataDefault from '../data/DataDefault';
import imgChickenSoup from '../asset/chickensoup.jpg';
import imgVegetableSoup from '../asset/vegetablesoup.jpg';
import imgCancel from '../asset/cancel.png';
import imgNext from '../asset/next.png';
import imgAdd from '../asset/plus.png';
import {SafeAreaView} from 'react-native-safe-area-context';
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
    const twoOptionAlertHandler = () => {
      Alert.alert(
        //title
        'Xác nhận xoá',
        //body
        'Bạn có muốn xoá ' + item.name + ' ?',
        [
          {text: 'Yes', onPress: () => removeItem()},
          {
            text: 'No',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    };
    const removeItem = () => {
      let data1 = data;
      data1 = data1.filter(e => e.id != item.id);
      AsyncStorage.setItem(category, JSON.stringify(data1));
      setData(data1);
    };
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('DetailScreen', {
            category: category,
            id: item.id,
            image: item.image,
            name: item.name,
            ingredients: item.ingredients,
            steps: item.steps,
            refreshData: refreshData,
          });
        }}>
        <LinearGradient
          style={styles.item}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#009245', '#8cc631']}>
          <View>
            <FastImage source={item.image} style={styles.image} />
          </View>
          <Text style={styles.itemText}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditScreen', {
                category: category,
                id: item.id,
                image: item.image,
                name: item.name,
                ingredients: item.ingredients,
                steps: item.steps,
                refreshData: refreshData,
              });
            }}
            style={{
              alignSelf: 'center',
              marginRight: 10,
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 180,
            }}>
            <Image
              source={imgEdit}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                tintColor: '#009245',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => twoOptionAlertHandler()}
            style={{
              alignSelf: 'center',
              marginRight: 10,
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 180,
            }}>
            <Image
              source={imgDelete}
              style={{
                width: 17,
                height: 17,
                tintColor: '#009245',
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddRecipeScreen', {
            category: category,
            refreshData: refreshData,
          })
        }
        style={{
          alignSelf: 'flex-end',
          padding: 15,
          marginBottom: 15,
          backgroundColor: 'white',
          borderRadius: 180,
        }}>
        <Image
          source={imgAdd}
          style={{
            width: 20,
            height: 20,
            tintColor: '#009245',
          }}
        />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.textSearch}
          value={searchText}
          onChangeText={setSearchText}></TextInput>
        <TouchableOpacity
          style={styles.clearSearch}
          onPress={() => setSearchText('')}>
          <FastImage
            source={imgCancel}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {dataTemp.length !== 0 ? (
          <FlatList
            extraData={data}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}></FlatList>
        ) : (
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              color: 'red',
            }}>
            {emptyText}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 100,
  },
  itemContainer: {
    marginTop: 10,
  },
  item: {
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
  },
  itemText: {
    paddingRight: 10,
    fontSize: 18,
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    borderWidth: 5,
    margin: 5,
    borderColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  textSearch: {fontSize: 20, margin: 10, flex: 1},
  searchContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  clearSearch: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
