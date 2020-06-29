import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, current } = recipeContext;

  useEffect(() => {
    if (current !== null) {
      setRecipe(current);
    } else {
      setRecipe({
        name: '',
        ingredients: '',
        directions: '',
        source: '',
        type: 'personal'
      });
    }
  }, [recipeContext, current]);

  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    directions: '',
    source: '',
    type: 'personal'
  });

  const { name, ingredients, directions, source, type } = recipe;

  const onChange = e =>
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  const onSubmit = e => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: '',
      ingredients: '',
      directions: '',
      source: '',
      type: 'personal'
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Recipe</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Ingredients'
        name='ingredients'
        value={ingredients}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Directions'
        name='directions'
        value={directions}
        onChange={onChange}
      />
      <h5>Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value='Add Recipe'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default RecipeForm;
