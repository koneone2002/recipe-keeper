import React, { Fragment, useContext } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, filtered } = recipeContext;
  if (recipes.length === 0) {
    return <h4>Please add a recipe</h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(recipe => <RecipeItem recipe={recipe} key={recipe.id} />)
        : recipes.map(recipe => <RecipeItem recipe={recipe} key={recipe.id} />)}
    </Fragment>
  );
};

export default Recipes;
