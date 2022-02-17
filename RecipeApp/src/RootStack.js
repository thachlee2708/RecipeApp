import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home/HomeContainer';
import Detail from './components/Detail/DetailContainer';
import RecipeList from './components/RecipeList/RecipeListContainer';
import AddRecipe from './components/AddRecipe/AddRecipeContainer';
import EditRecipe from './components/Edit/EditRecipeContainer';

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
