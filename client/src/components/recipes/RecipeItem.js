import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);
  const { deleteRecipe, setCurrent, clearCurrent } = recipeContext;
  const { name, ingredients, directions, source, type, _id } = recipe;

  const onDelete = () => {
    deleteRecipe(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'delicious'
              ? 'badge-success'
              : type === 'mediocre'
              ? 'badge-primary'
              : 'badge-danger')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {ingredients && (
          <li>
            <i className='fas fa-bread-slice'> </i> {ingredients}
          </li>
        )}
        {directions && (
          <li>
            <i className='fas fa-hamburger'> </i> {directions}
          </li>
        )}
        {source && (
          <li>
            <i className='fas fa-globe'> </i> {source}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(recipe)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
};
export default RecipeItem;
