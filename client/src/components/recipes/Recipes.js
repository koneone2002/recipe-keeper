import React, { Fragment, useContext } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
// import ContactItem from './ContactItem';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes } = recipeContext;

  return (
    <Fragment>
      {recipes.map(recipe => (
        <h3>{recipe.name}</h3>
      ))}
    </Fragment>
  );
};

export default Recipes;
