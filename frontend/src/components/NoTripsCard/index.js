import './NoTripsCard.css'
import { useHistory } from 'react-router-dom'

const NoTripsCard = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='container notrips__container'>
      <div className='notrips__card'>
        <div className='notrips__left'>
          <span className="material-symbols-outlined notrips__hand notrips__content">waving_hand</span>
          <p className='notrips__sub notrips__content'>No trips booked...yet!</p>
          <p className='notrips__text notrips__content'>Time to dust off your bags and start planning your next adventure.</p>
          <button className='btn notrips__content' onClick={handleClick}>Start Searching</button>
        </div>
        <div className='notrips__right'>
          <img className='notrips__image' src='https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80' />
          {/* <figure
          className='notrips__image'
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80)` }} */}
        </div>
      </div>
    </div>
  )
}

export default NoTripsCard;