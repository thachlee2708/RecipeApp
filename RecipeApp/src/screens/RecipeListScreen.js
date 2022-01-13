import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import imgHeader from '../asset/header.png';
import RecipeListComponent from "../components/RecipeListComponent";
import imgBack from '../asset/back.png';

export default class RecipeListScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <ImageBackground
              source={imgHeader}
              style={styles.imageBackground}
              resizeMode="contain"
              >
                  <Text style={styles.title}>RECIPE LIST</Text>
              </ImageBackground>
          </View>
          <View style={{alignItems:'flex-end', height: width*0.2, marginRight:25}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#009245', '#8cc631']}
            style={styles.buttonBack}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HomeScreen")}
              style={{ paddingHorizontal: 10, alignItems: 'center' }}>
              <Image source={imgBack} style={{ width: 25, height: 25, tintColor: 'white' }} />
            </TouchableOpacity>
          </LinearGradient>
          </View>
          <View style={styles.body}>
              <RecipeListComponent {...this.props}/>
          </View>
      </View>
    )
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  header: {
    marginTop:20,
    position:'absolute'
  },
  body: {
    flex:1,
    marginTop: width*0.2,
    paddingHorizontal:30
  },
  imageBackground: {
    width: width*0.4,
    height: width*0.4,
    alignItems:'center'
  },
  title: {
    color:'white',
    marginTop:25,
    fontWeight:'bold',
    fontSize:25
  },
  buttonBack: {
    width: 45,
    paddingVertical: 10,
    borderBottomLeftRadius:100,
    borderTopLeftRadius:100,
    marginTop:40
  },
});