import React from 'react';
import Recipes from '../recipes/Recipes';
import RecipeForm from '../recipes/RecipeForm';
import RecipeState from '../../context/recipe/RecipeState';
const RecipeContainer = () => {
  return (
    <div className='grid-2'>
      <RecipeState>
        <div>{<RecipeForm />}</div>

        <div>
          <Recipes />

          {/* <Recipes /> */}
        </div>
      </RecipeState>
    </div>
  );
};

export default RecipeContainer;
