import React, { useReducer } from 'react';
import axios from 'axios';

import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  CLEAR_RECIPES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPE,
  CLEAR_FILTER,
  RECIPE_ERROR
} from '../types';

const RecipeState = props => {
  const initialState = {
    recipes: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);
  // Get Recipes
  const getRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes');
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Add Recipe
  const addRecipe = async recipe => {
    // contact.id = uuidv4();
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/recipes', recipe, config);
      dispatch({
        type: ADD_RECIPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Delete Recipe
  const deleteRecipe = async id => {
    try {
      await axios.delete(`/api/recipes/${id}`);
      dispatch({
        type: DELETE_RECIPE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Update Recipe
  const updateRecipe = async recipe => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/api/recipes/${recipe._id}`, recipe, config);
      dispatch({
        type: UPDATE_RECIPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Clear Recipes
  const clearRecipes = () => {
    dispatch({ type: CLEAR_RECIPES });
  };
  // Set Current Recipe
  const setCurrent = recipe => {
    dispatch({ type: SET_CURRENT, payload: recipe });
  };
  // Clear Current Recipe
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Recipes
  const filterRecipes = text => {
    dispatch({ type: FILTER_RECIPE, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addRecipe,
        deleteRecipe,
        clearRecipes,
        setCurrent,
        clearCurrent,
        updateRecipe,
        filterRecipes,
        clearFilter,
        getRecipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
export default RecipeState;
