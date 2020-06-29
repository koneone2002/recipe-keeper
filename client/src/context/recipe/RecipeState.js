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
        type: 'professional'
      },
      {
        id: 3,
        name: 'Steak Diane',
        ingredients: 'Sirloin Steak',
        directions: 'Grill them up',
        source: 'http://someurl.com',
        type: 'personal'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Add Recipe
  const addRecipe = recipe => {
    recipe.id = uuidv4();
    dispatch({ type: ADD_RECIPE, payload: recipe });
  };
  // Delete Recipe
  const deleteRecipe = id => {
    dispatch({ type: DELETE_RECIPE, payload: id });
  };
  // Set Current Recipe
  const setCurrent = recipe => {
    dispatch({ type: SET_CURRENT, payload: recipe });
  };
  // Clear Current Recipe
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Recipe

  // Filter Recipes

  // Clear Filter

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        current: state.current,
        addRecipe,
        deleteRecipe,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
export default RecipeState;
