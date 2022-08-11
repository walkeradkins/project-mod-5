import './BookingsBanner.css'
import { useHistory } from 'react-router-dom'
import BookingsCarousel from '../BookingsCarousel';

const NoTripsCard = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='bookings__container'>
      <div className='bookings__card'>
        <div className='notrips__left'>
          <span className="material-symbols-outlined notrips__hand notrips__content">flight_takeoff</span>
          <p className='notrips__sub notrips__content'>Time to get ready!</p>
          <p className='bookings__text notrips__content'>Time to dust off your bags and start getting ready for your next adventure.</p>
          <button className='btn notrips__content' onClick={handleClick}>Add more trips</button>
        </div>
        <div className='bookings__right'>
          <BookingsCarousel />
        </div>
      </div>
    </div>
  )
}

export default NoTripsCard;