import logo from '../images/wherebnb.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className='navbar__logo'>
      <img src={logo} className='navbar__logo-image' />
      wherebnb
    </div>
  )
}

export default Logo