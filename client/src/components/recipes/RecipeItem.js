import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);
  const { deleteRecipe } = recipeContext;
  const { name, ingredients, directions, source, type, id } = recipe;

  const onDelete = () => {
    deleteRecipe(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {ingredients && (
          <li>
            <i className='fas fa-envelope-open'> </i> {ingredients}
          </li>
        )}
        {directions && (
          <li>
            <i className='fas fa-phone'> </i> {directions}
          </li>
        )}
        {source && (
          <li>
            <i className='fas fa-phone'> </i> {source}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
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
