import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FastImage from 'react-native-fast-image'

import imgSoup from '../asset/soup.jpg';
import imgGrill from '../asset/grill.jpg';
import imgSaute from '../asset/saute.jpg';
import imgSteam from '../asset/steam.jpg';
import imgFry from '../asset/fry.jpg';
import imgCancel from '../asset/cancel.png';
import imgNext from '../asset/next.png';

var data = [
        {
            name:'Soup',
            image:imgSoup,
        },
        {
            name:'Grill',
            image:imgGrill,
        },
        {
            name:'Saute',
            image: imgSaute,
        },
        {
            name:'Steam',
            image:imgSteam,
        },
        {
            name:'Fry',
            image:imgFry,
        },
];

export default class CategoryComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp: data,
      search: ''
    }
  }

  renderItem = ({item}) => {
    return(
        <LinearGradient 
        colors={['#009245', '#8cc631']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        style={styles.item}
        >
          <View style={styles.image_container}>
              <FastImage 
                source={item.image}
                style={styles.image}
              />
          </View>
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
          </View>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("RecipeListScreen",{
            image: item.image,
            name: item.name
          })}
          style={styles.button}>
          <Image source={imgNext} style={{width: 15, height: 15, tintColor:'green'}} />
          </TouchableOpacity>

        </LinearGradient>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{
          height:10
        }}
      />
    )
  }

  _search(text){
      let data = [];
      this.state.data_temp.map(function(value){
        if(value.name.indexOf(text) > -1){
          data.push(value);
        }
      });
      this.setState({
        data:data,
        search:text
      });
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
                value={this.state.search}
                onChangeText={(text)=>this._search(text)}
              />
              <TouchableOpacity
              onPress={()=>this._search("")}
              style={{paddingHorizontal:10}}>
              <FastImage source={imgCancel} style={{width: 12, height: 12}} />
              </TouchableOpacity>

          </View>
          <View style={styles.flatList}>
              <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
              />
          </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  content: {
    flex:1,
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10
  }
});
