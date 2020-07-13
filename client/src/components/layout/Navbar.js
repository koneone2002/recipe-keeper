import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import RecipeContext from '../../context/recipe/recipeContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const { clearRecipes } = recipeContext;
  const onLogout = () => {
    logout();
    clearContacts();
    clearRecipes();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>

      <li>
        <Link to='/'>Contacts</Link>
      </li>
      <li>
        <Link to='/recipes'>Recipes</Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Navbar.defaultProps = {
  title: 'Recipe Keeper',
  icon: 'fas fa-hamburger'
};

export default Navbar;
