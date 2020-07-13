import React, { useContext, useEffect } from 'react';
import Recipes from '../recipes/Recipes';
import RecipeForm from '../recipes/RecipeForm';
// import RecipeState from '../../context/recipe/RecipeState';
import RecipeFilter from '../recipes/RecipeFilter';
import AuthContext from '../../context/auth/authContext';

const RecipeContainer = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='grid-2'>
      <div>{<RecipeForm />}</div>

      <div>
        <RecipeFilter />
        <Recipes />

        {/* <Recipes /> */}
      </div>
    </div>
  );
};

export default RecipeContainer;
