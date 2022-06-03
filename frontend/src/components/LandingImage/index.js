
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LandingImage.css'

const LandingImage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Demo', password: 'password' })).catch(
      async (res) => {
        const data = await res.json();
      }
    );
  };

  return (
    <div className='landing__image'>
      <p className='landing__welcome'>Where would you like to go?</p>
      <button className='btn landing__image-demo-btn' onClick={handleSubmit}>Demo</button>
    </div>
  )
}

export default LandingImage;