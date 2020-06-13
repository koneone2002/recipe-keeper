import React from 'react';

import Recipes from '../recipes/Recipes';
import RecipeState from '../../context/recipe/RecipeState';
const RecipeContainer = () => {
  return (
    <div className='grid-2'>
      <div>{/* Contact Form */}</div>

      <div>
        <RecipeState>
          <Recipes />
        </RecipeState>
        {/* <Recipes /> */}
      </div>
    </div>
  );
};

export default RecipeContainer;
