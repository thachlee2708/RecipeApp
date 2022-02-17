import React from 'react';
import {Alert, AsyncStorage} from 'react-native';
import ItemRecipeListComponent from './ItemRecipeListComponent';
export default ItemRecipeListComponentContainer = ({
  item,
  data,
  setData,
  navigation,
  category,
  refreshData,
}) => {
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
  const itemRecipeListComponent = {
    twoOptionAlertHandler,
    item,
    navigation,
    category,
    refreshData,
  };
  return <ItemRecipeListComponent {...itemRecipeListComponent} />;
};
