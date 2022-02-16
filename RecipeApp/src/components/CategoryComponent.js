import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

import imgSoup from '../asset/soup.jpg';
import imgGrill from '../asset/grill.jpg';
import imgSaute from '../asset/saute.jpg';
import imgSteam from '../asset/steam.jpg';
import imgFry from '../asset/fry.jpg';
import imgCancel from '../asset/cancel.png';
import imgNext from '../asset/next.png';
import {SafeAreaView} from 'react-native-safe-area-context';
const dataSource = [
  {
    name: 'Soup',
    image: imgSoup,
  },
  {
    name: 'Grill',
    image: imgGrill,
  },
  {
    name: 'Saute',
    image: imgSaute,
  },
  {
    name: 'Steam',
    image: imgSteam,
  },
  {
    name: 'Fry',
    image: imgFry,
  },
];
export default Category = ({navigation}) => {
  const [data, setData] = useState(dataSource);
  const [searchText, setSearchText] = useState('');
  const filterData = () => {
    let data1 = [];
    for (let x in dataSource)
      if (dataSource[x].name.toLowerCase().includes(searchText.toLowerCase()))
        data1.push(dataSource[x]);
    setData(data1);
  };
  useEffect(() => {
    filterData();
  }, [searchText]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('RecipeListScreen', {category: item.name})
        }>
        <LinearGradient
          style={styles.item}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#009245', '#8cc631']}>
          <View>
            <FastImage source={item.image} style={styles.image} />
          </View>
          <Text style={styles.itemText}>{item.name}</Text>
          <Image
            source={imgNext}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
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
        <FlatList
          extraData={data}
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}></FlatList>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  itemContainer: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
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
