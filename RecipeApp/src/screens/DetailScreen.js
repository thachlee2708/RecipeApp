import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";

import imgHeaderDetail from '../asset/header_detail.png';
import imgBack from '../asset/back.png';

export default class DetailScreen extends React.Component {
  render() {
    const { name, image, ingredienrts, steps } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={imgHeaderDetail}
          style={{ flex: 1, alignItems: 'center', height: width * 0.7, }}
          resizeMode={"stretch"}
        >
          <View style={styles.image_container}>
            <Image
              source={this.props.navigation.state.params.image}
              style={styles.image}
            />
          </View>
          <View style={styles.back}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ paddingHorizontal: 10 }}>
              <Image source={imgBack} style={{ width: 25, height: 25, tintColor: 'white' }} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        
        <ScrollView style={styles.footer}>
          <Text numberOfLines={2} style={styles.textName}>{name.toUpperCase()}</Text>
          <Text style={[styles.name, {marginTop:40}]}>Ingredienrts :</Text>
          <Text style={styles.textDetail}>{ingredienrts}</Text>
          <Text style={styles.name}>Steps :</Text>
          <Text style={styles.textDetail}>{steps}</Text>
        </ScrollView>
      </View>
    )
  }
}

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const height_image = width * 0.5;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex:2,
    paddingHorizontal: 30,
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image / 3
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: height_image / 2
  },
  back: {
    position: 'absolute',
    left: 0,
    marginTop: 30,
    marginLeft: 15
  },
  textName: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30
  },
  textDetail: {
    color: 'gray',
    marginTop: 10,
    fontSize:15
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 100
  },
  name: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15
},
});