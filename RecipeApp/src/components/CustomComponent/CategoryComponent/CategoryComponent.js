import React from 'react';
import styles from './_style';
import {View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import imgCancel from '../../../asset/cancel.png';
import {SafeAreaView} from 'react-native-safe-area-context';
export default Category = ({searchText, setSearchText, data, renderItem}) => {
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
