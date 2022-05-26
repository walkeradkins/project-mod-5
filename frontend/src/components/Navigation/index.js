import './Navigation.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) return (
    <ul>
      <li key={`login`}><NavLink to='/login'>Login</NavLink></li>
      <li key={`signup`}><NavLink to='/signup'>Sign Up</NavLink></li>
    </ul>
  )

  return (
    <ul>
      <li key={`home`}><NavLink to='/'>Home</NavLink></li>
    </ul>
  )
}

export default Navigation;