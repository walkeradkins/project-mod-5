import { Link } from 'react-router-dom';
import './UnauthorizedUser.css';

const UnauthorizedUser = ({ type, userId }) => {

    return (
      <div>
        <p className='header-title'>Looks like these aren't your {type}s...</p>
        <ul>
          <li><Link to={`/users/${userId}/${type}s`}>Your {type}s</Link></li>
          <li><Link to='/'>Back to all listings!!</Link></li>
        </ul>
      </div>
  )
}

export default UnauthorizedUser;