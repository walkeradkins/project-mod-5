import React, { useState, useEffect } from 'react';
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
  const url = window.location.href;
  const [isListings, setIsListings] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;

  useEffect(() => {
    if (url.includes('listings')) setIsListings(true);
    return () => setIsListings(false);
  }, [url])

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
      <nav className={isListings ? 'navbar__listings' : 'navbar'}>
        <header className='navbar__header'>
          <NavLink exact to="/">
            <Logo />
          </NavLink>
        </header>
        {isLoaded && sessionLinks}
      </nav>
      {!sessionUser && isLoaded &&
        <div>
          <LandingImage />
        </div>}
    </>
  );
}

export default Navigation;