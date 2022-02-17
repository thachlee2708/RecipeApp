import React, {useState, useEffect} from 'react';
import ItemCategory from './ItemCategoryComponent/ItemCategoryComponent';
import imgSoup from '../../../asset/soup.jpg';
import imgGrill from '../../../asset/grill.jpg';
import imgSaute from '../../../asset/saute.jpg';
import imgChese from '../../../asset/cheese.jpeg';
import imgSteam from '../../../asset/steam.jpg';
import imgFry from '../../../asset/fry.jpg';
import CategoryComponent from './CategoryComponent';
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
    name: 'Cheese',
    image: imgChese,
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
    return <ItemCategory {...{item, navigation}} />;
  };
  const categoryComponentProps = {searchText, setSearchText, data, renderItem};
  return <CategoryComponent {...categoryComponentProps} />;
};
