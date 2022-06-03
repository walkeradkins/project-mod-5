import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../images/wherebnb.png'
import LandingImage from '../LandingImage';
import SearchBar from '../SearchBar';
import Logo from '../Logo';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <SearchBar />
        <div className='navbar__user'>
          <NavLink to='/listings' className='navbar__host'>Become a Host</NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <div>
        <div>
          <LoginFormModal />
          <SignupFormModal />
        </div>
      </div>
    );
  }

  return (
    <>
    <nav className='navbar'>
      <header className='navbar__header'>
        <NavLink exact to="/">
          <Logo />
        </NavLink>
      </header>
      {isLoaded && sessionLinks}
    </nav>
    {!sessionUser &&
    <div>
      <LandingImage />
      </div>}
    </>
  );
}

export default Navigation;