import './BookingLink.css'
import { Link } from 'react-router-dom';
import { getTravelDates } from '../utils'

const BookingLink = ({ listing, booking, user }) => {
  const { city, Images } = listing;
  const { id } = user;

  const dateString = getTravelDates(booking.startDate, booking.endDate);
  if (!listing.Images) return null;

  return (
    <Link to={`/users/${id}/bookings/${booking.id}`}>
      <div className='booking-link'>
        <div>
          <figure className='booking-link__image' style={{ backgroundImage: `url( ${Images[0].url} )` }} />
        </div>
        <div>
          <p className='booking-link__city'>{city}</p>
          <p className='booking-link__date'>{dateString}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookingLink
