import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, Dimensions, ImageBackground } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import imgSoup from '../asset/soup.jpg';
import imgGrill from '../asset/grill.jpg';
import imgCamera from '../asset/camera.png';
import imgHeader from '../asset/header.png';
import imgBack from '../asset/back.png';
import LinearGradient from "react-native-linear-gradient";

var dataDefault = [
    {
        id: 1,
        name: 'Soup',
        image: imgSoup,
        ingredienrts: '',
        steps: ''
    },
    {
        id: 2,
        name: 'Grill',
        image: imgGrill,
        ingredienrts: '',
        steps: ''
    },
];


export default class EditRecipeScreen extends React.Component {
    state = {
        photoSource: null,
        data: dataDefault,
        foodName: '',
        ingredienrts: '',
        steps: '',
        height: 40
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                let source = { uri: response.uri }
                this.setState({ photoSource: source })
            }
        })
    }

    storeData = async () => {
        const { photoSource, foodName, ingredienrts, steps, data } = this.state;
        const { categoryName, refresh, id } = this.props.navigation.state.params;
        console.log("PHOTO", photoSource)
        var element = {
            id: id,
            name: foodName,
            image: photoSource,
            ingredienrts: ingredienrts,
            steps: steps
        }
        var arrTemp = data;
        for(var index in arrTemp){
            if(arrTemp[index].id == id){
                arrTemp[index] = element;
            }
        }

        await AsyncStorage.setItem(categoryName, JSON.stringify(arrTemp))
        refresh();
        this.props.navigation.navigate("RecipeListScreen",
            {
                name: categoryName
            })
    }


    updateSize = (height) => {
        this.setState({
          height
        });
      }

    async componentDidMount() {

        const {
            name,
            image,
            ingredienrts,
            steps,
            categoryName } = this.props.navigation.state.params;

        var dataReceive = JSON.parse(await AsyncStorage.getItem(categoryName))
        this.setState({
            data: dataReceive || dataDefault,
        })
       
        this.setState({
            foodName: name,
            photoSource: image,
            ingredienrts: ingredienrts,
            steps: steps
        })
    }

    render() {
        const { photoSource,height } = this.state
        let newStyle = {
          height,
           backgroundColor: 'azure',
            fontSize: 16,
             marginTop: 10
        }
    
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                        source={imgHeader}
                        style={styles.imageBackground}
                        resizeMode="contain"
                    >
                        <Text style={styles.title}>EDIT RECIPE</Text>
                    </ImageBackground>
                </View>
                <View style={{ alignItems: 'flex-end', height: width * 0.2, marginRight: 30 }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#009245', '#8cc631']}
                        style={styles.buttonBack}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("RecipeListScreen", {
                                name: this.props.navigation.state.params.categoryName,
                            })}
                            style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                            <Image source={imgBack} style={{ width: 25, height: 25, tintColor: 'white' }} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <ScrollView style={styles.body}>
                    <Text style={styles.name}>Food name :</Text>
                    <TextInput
                        style={{ height: 40, backgroundColor: 'azure', fontSize: 16, marginTop: 10 }}
                        defaultValue={this.state.foodName}
                        placeholder="What's your food name?"
                        onChangeText={(foodName) => this.setState({ foodName })}
                    />
                    <Text style={styles.name}>Food image :</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        {photoSource ?
                            <Image
                                source={photoSource}
                                style={{ width: 400, height: 300, marginTop: 10 }}
                            />
                            :
                            <Image
                                source={imgSoup}
                                style={{ width: 400, height: 300, marginTop: 10 }}
                            />
                        }

                        <TouchableOpacity
                            onPress={this.handleChoosePhoto}
                            style={{ paddingHorizontal: 10 }}>
                            <Image source={imgCamera} style={{ width: 30, height: 30, marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.name}>Ingredienrts :</Text>
                    <TextInput
                        placeholder="What are the types of ingredients?"
                        defaultValue={this.state.ingredienrts}
                        multiline={true}
                        onChangeText={(ingredienrts) => this.setState({ ingredienrts })}
                        style={[newStyle]}
                        editable={true}
                        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                    />

                    <Text style={styles.name}>Steps :</Text>

                    <TextInput
                        multiline={true}
                        defaultValue={this.state.steps}
                        onChangeText={(steps) => this.setState({ steps })}
                        placeholder="How would you do it?"
                        style={[newStyle]}
                        editable={true}
                        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                    />

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#009245', '#8cc631']}
                        style={styles.button}
                    >
                        <TouchableOpacity
                            onPress={this.storeData}
                        >
                            <Text style={styles.textSave}>SAVE RECIPE</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>
            </View>
        )
    }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 20,
        position: 'absolute'
    },
    body: {
        flex: 1,
        marginTop: width * 0.3,
        paddingHorizontal: 30
    },
    name: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        paddingVertical: 10,
        borderRadius: 100
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    },
    textSave: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonBack: {
        width: 45,
        paddingVertical: 10,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
        marginTop: 40
    },

});  