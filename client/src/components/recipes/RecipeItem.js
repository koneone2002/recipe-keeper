import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe }) => {
  const { name, ingredients, directions, source, type, id } = recipe;
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
        <button className='btn btn-dark btn-small'>Edit</button>
        <button className='btn btn-danger btn-small'>Delete</button>
      </p>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
};
export default RecipeItem;
