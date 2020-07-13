import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, updateRecipe, clearCurrent, current } = recipeContext;

  useEffect(() => {
    if (current !== null) {
      setRecipe(current);
    } else {
      setRecipe({
        name: '',
        ingredients: '',
        directions: '',
        source: '',
        type: 'delicious'
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
    if (current === null) {
      addRecipe(recipe);
    } else {
      updateRecipe(recipe);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <textarea
        type='text'
        placeholder='Ingredients'
        name='ingredients'
        value={ingredients}
        onChange={onChange}
      />
      <textarea
        type='text'
        placeholder='Directions'
        name='directions'
        value={directions}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Source'
        name='source'
        value={source}
        onChange={onChange}
      />
      <h5>Rating</h5>
      <input
        type='radio'
        name='type'
        value='delicious'
        checked={type === 'delicious'}
        onChange={onChange}
      />{' '}
      Delicious{' '}
      <input
        type='radio'
        name='type'
        value='mediocre'
        checked={type === 'mediocre'}
        onChange={onChange}
      />{' '}
      Mediocre{' '}
      <input
        type='radio'
        name='type'
        value="don't make again!"
        checked={type === "don't make again!"}
        onChange={onChange}
        className='bg-alert'
      />{' '}
      "Don't make again!"{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Edit Recipe' : 'Add Recipe'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn-btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default RecipeForm;
