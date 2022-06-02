import './BookingDetails.css';
import { useParams } from 'react-router-dom';
import { getTravelDates } from '../utils'
import CancelBooking from '../CancelBooking';
import { useState, useEffect } from 'react';
import ReservationDetailsCard from '../ReservationDetailsCard';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';

const BookingDetails = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.bookings)
  const listings = useSelector(state => state.listings);

  const [displayCancelForm, setDisplayCancelForm] = useState(false)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings());
  }, [dispatch]);

  console.log('listings:: ', listings.listings.length)
  console.log('bookings:: ', bookings.bookings.length)
  if (!bookings.bookings.length) return null;
  if (!listings.listings.length) return null;

  const currentBooking = bookings[id];
  const currentListing = listings[currentBooking.listingId];

  const { city, name, state, country, Images, price } = currentListing;
  const { startDate, endDate } = currentBooking;
  const dateString = getTravelDates(startDate, endDate);

  const toggleCancel = () => {
    setDisplayCancelForm(prev => !prev);
  }

  return (
    <div className='booking__details container'>
      <div className='booking__details-info'>
        <h1 className='booking__details-location header-title'>{city}, {state}, {country}</h1>
        <p className='booking__details-dates header-subtitle'>{dateString}</p>
        <ReservationDetailsCard listing={currentListing} user={user} booking={currentBooking}/>
        <button className='btn' onClick={toggleCancel}>Cancel Reservation</button>
      </div>
      <div>
        {displayCancelForm &&
          <CancelBooking
            booking={currentBooking}
            setVisible={setDisplayCancelForm}
            user={user}
          />}
      </div>
    </div>
  )
}

export default BookingDetails