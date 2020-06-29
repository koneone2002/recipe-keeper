import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPE,
  CLEAR_FILTER
} from '../types';

const RecipeState = props => {
  const initialState = {
    recipes: [
      {
        id: 1,
        name: 'Hot Wings',
        ingredients: 'Chicken Wings',
        directions: 'Spice them up',
        source: 'http://someurl.com',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Pad Thai Noodles',
        ingredients: 'Noodles',
        directions: 'Stir them up',
        source: 'http://someurl.com',
        type: 'business'
      },
      {
        id: 3,
        name: 'Steak Diane',
        ingredients: 'Sirloin Steak',
        directions: 'Grill them up',
        source: 'http://someurl.com',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Add Recipe
  const addRecipe = recipe => {
    recipe.id = uuidv4();
    dispatch({ type: ADD_RECIPE, payload: recipe });
  };
  // Delete Recipe

  // Set Current Recipe

  // Clear Current Recipe

  // Update Recipe

  // Filter Recipes

  // Clear Filter

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        addRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
export default RecipeState;
