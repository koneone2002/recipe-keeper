import React, { Fragment, useContext } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
// import RecipeItem from './RecipeItem';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes } = recipeContext;
  console.log('Hello');
  return (
    <Fragment>
      {recipes.map(recipe => (
        <h3>{recipe.name}</h3>
      ))}
    </Fragment>
  );
};

export default Recipes;
