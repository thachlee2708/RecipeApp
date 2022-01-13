import React, { Component } from 'react';  
import {TextInput } from 'react-native';  
  
export default class UselessTextInput extends Component {  
    render() {  
        return (  
            <TextInput  
                {...this.props} 
                editable = {true}  
                maxLength = {10}  
            />  
        );  
    }  
}  