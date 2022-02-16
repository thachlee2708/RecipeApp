import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Detail from './screens/DetailScreen';
import RecipeList from './screens/RecipeListScreen';
import AddRecipe from './screens/AddRecipeScreen';
import EditRecipe from './screens/EditRecipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="AddRecipeScreen" component={AddRecipe} />
        <Stack.Screen name="RecipeListScreen" component={RecipeList} />
        <Stack.Screen name="DetailScreen" component={Detail} />
        <Stack.Screen name="EditScreen" component={EditRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
