import React, { Fragment, useContext } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes } = recipeContext;

  return (
    <Fragment>
      {recipes.map(recipe => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </Fragment>
  );
};

export default Recipes;
