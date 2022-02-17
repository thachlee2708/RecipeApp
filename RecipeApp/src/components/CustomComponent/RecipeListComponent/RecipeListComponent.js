import React from 'react';
import styles from './_style';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import imgCancel from '../../../asset/cancel.png';
import imgAdd from '../../../asset/plus.png';
import {SafeAreaView} from 'react-native-safe-area-context';
export default RecipeList = ({
  navigation,
  category,
  refreshData,
  searchText,
  setSearchText,
  data,
  dataTemp,
  emptyText,
  renderItem,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddRecipeScreen', {
            category: category,
            refreshData: refreshData,
          })
        }
        style={styles.wrapIconAdd}>
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
          <Text style={styles.emptyListText}>{emptyText}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
