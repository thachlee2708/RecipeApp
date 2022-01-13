import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, Dimensions, ImageBackground } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import imgCamera from '../asset/camera.png';
import imgHeader from '../asset/header.png';
import imgBack from '../asset/back.png';
import imgRecipe from '../asset/recipe.png';

import LinearGradient from "react-native-linear-gradient";
import dataDefault from '../data/DataDefault';



export default class AddRecipeScreen extends React.Component {
    state = {
        photoSource: imgRecipe,
        data: dataDefault,
        foodName: '',
        ingredienrts: '',
        steps: '',
        height: 40
    }

    arr = dataDefault;
    id = 3

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

    updateSize = (height) => {
        this.setState({
            height
        });
    }

    storeData = async () => {
        const { photoSource, foodName, ingredienrts, steps } = this.state;
        const { name, refresh } = this.props.navigation.state.params;
        console.log("PHOTO", photoSource)

        this.arr.push({ id: this.id, name: foodName, image: photoSource, ingredienrts: ingredienrts, steps: steps })
        this.id++;
        await AsyncStorage.setItem(name, JSON.stringify(this.arr))
        this.setState({
            data: JSON.parse(await AsyncStorage.getItem(name))
        })
        console.log("STORE", this.state.data)
        refresh();
        this.props.navigation.navigate("RecipeListScreen",
            {
                name: name
            })
    }


    async componentDidMount() {
        const { name } = this.props.navigation.state.params;
        var dataReceive = JSON.parse(await AsyncStorage.getItem(name))
        if (name == "Soup") {
            this.setState({
                data: dataReceive || dataDefault,
                data_temp: dataReceive || dataDefault,
            })
        } else {
            this.setState({
                data: dataReceive || [],
                data_temp: dataReceive || [],
            })
        }

        this.arr = this.state.data
        if (this.arr.length >= 1) {
            this.id = this.arr[this.arr.length - 1].id + 1
        }

    }

    render() {
        const { photoSource, height } = this.state
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
                        <Text style={styles.title}>ADD RECIPE</Text>
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
                                name: this.props.navigation.state.params.name,
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
                        placeholder="What's your food name?"
                        onChangeText={(foodName) => this.setState({ foodName })}
                    />
                    <Text style={styles.name}>Food image :</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 400, height: 300, marginTop: 10 }}>
                            {photoSource ?
                                <Image
                                    source={photoSource}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
                                />
                                :
                                <Image
                                    source={imgRecipe}
                                    style={{ flex: 1, width: null, height: null, tintColor: 'green', resizeMode: 'contain' }
                                    }
                                />
                            }
                        </View>
                        <TouchableOpacity
                            onPress={this.handleChoosePhoto}
                            style={{ paddingHorizontal: 10 }}>
                            <Image source={imgCamera} style={{ width: 30, height: 30, marginTop: 10, tintColor: 'black' }} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.name}>Ingredienrts :</Text>
                    <TextInput
                        placeholder="What are the types of ingredients?"
                        multiline={true}
                        onChangeText={(ingredienrts) => this.setState({ ingredienrts })}
                        style={[newStyle]}
                        editable={true}
                        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                    />

                    <Text style={styles.name}>Steps :</Text>

                    <TextInput
                        multiline={true}
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
                            style={{}}>
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