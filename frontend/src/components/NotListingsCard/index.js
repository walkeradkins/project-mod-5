import './NoListingsCard.css'
import { useHistory } from 'react-router-dom';

const NoListingsCard = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='container nolistings__container'>
      <div className='nolistings__card'>
        <div className='nolistings__left'>
          <span className="material-symbols-outlined nolistings__house nolistings__content">cottage</span>
          <p className='nolistings__sub nolistings__content'>Interested in hosting you home?</p>
          <p className='nolistings__text nolistings__content'>It's never been easier to become a WhereBnB host!</p>
          <button className='btn nolistings__content' onClick={handleClick}>Host Your Home</button>
        </div>
        <div className='nolistings__right'>
          <img className='nolistings__image' src='https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
          {/* <figure
          className='nolistings__image'
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80)` }} */}
        </div>
      </div>
    </div>
  )
}

export default NoListingsCard;