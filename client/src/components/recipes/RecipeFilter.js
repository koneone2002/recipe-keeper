import React, { useContext, useRef, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeFilter = () => {
  const recipeContext = useContext(RecipeContext);
  const { filterRecipes, clearFilter, filtered } = recipeContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterRecipes(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder={'Filter Recipes...'}
        onChange={onChange}
      />
    </form>
  );
};

export default RecipeFilter;
