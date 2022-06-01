import './BookingLink.css'
import { Link } from 'react-router-dom';
import { getTravelDates } from '../utils'

const BookingLink = ({ listing, booking, user }) => {
  // console.log('listing from link:: ', listing)
  // console.log('listing from booking link:: ', booking)
  const { city, Images } = listing;
  const { id } = user;

  const dateString = getTravelDates(booking.startDate, booking.endDate);
  return (
    <Link to={`/users/${id}/bookings/${booking.id}`}>
      <div className='booking-link'>
        <div>
          <figure className='booking-link__image' style={{ backgroundImage: `url( ${Images[0].url} )` }} />
        </div>
        <div>
          <h4>{city}</h4>
          <p>{dateString}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookingLink
