import React from 'react';
import RecipeListScreen from './RecipeListScreen';
export default RecipeListContainer = ({navigation, route}) => {
  const recipeListProps = {navigation, route};
  return <RecipeListScreen {...recipeListProps} />;
};
