import './ProfileButton.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu)
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }

  return (
    <>
      <button>
        <i
          onClick={openMenu}
          className="fa-solid fa-user"
        >
        </i>
      </button>
      {showMenu && (
        <ul className='profile-dropdown'>
          <li key={`username`}>{user.username}</li>
          <li key={`email`}>{user.email}</li>
          <li key={`logout`}><button onClick={logout}>Log Out</button></li>
        </ul>
      )}
    </>
  )
}

export default ProfileButton;