import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(recipe => (
              <CSSTransition key={recipe.id} timeout={500} classNames='item'>
                <RecipeItem recipe={recipe} />
              </CSSTransition>
            ))
          : recipes.map(recipe => (
              <CSSTransition key={recipe.id} timeout={500} classNames='item'>
                <RecipeItem recipe={recipe} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Recipes;
