import './BookingLink.css'
import { Link } from 'react-router-dom';
import { getTravelDates } from '../utils'

const BookingLink = ({ listing, booking, user, users }) => {
  const { city, Images, userId } = listing;
  const host = users[userId];
  const { id } = user;

  const dateString = getTravelDates(booking.startDate, booking.endDate);
  if (!listing.Images) return null;

  return (
    <div className='booking-link__container'>
      <Link to={`/users/${id}/bookings/${booking.id}`}>
        <div className='booking-link'>
          <div>
            <figure className='booking-link__image' style={{ backgroundImage: `url( ${Images[0].url} )` }} />
          </div>
          <div className='booking-link__text'>
            <p className='booking-link__city'>{city}</p>
            <p className='booking-link__host'>Hosted by {host?.firstName}</p>
            <p className='booking-link__date'>{dateString}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BookingLink
