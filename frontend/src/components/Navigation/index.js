import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../images/wherebnb.png'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='navbar__search'>
          <input className='navbar__search-input' />
          <span className="material-symbols-outlined navbar__search-icon">search</span>
        </div>
        <div className='navbar__user'>
          <NavLink to='/listings' className='navbar__host'>Become a Host</NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className='navbar'>
      <header className='navbar__header'>
        <NavLink className='navbar__logo' exact to="/">
          <img src={logo} className='navbar__logo-image' />
          wherebnb
        </NavLink>
      </header>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;