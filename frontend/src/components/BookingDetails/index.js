import './BookingDetails.css';
import { useParams } from 'react-router-dom';
import { getTravelDates } from '../utils'
import CancelBooking from '../CancelBooking';
import { useState, useEffect } from 'react';

const BookingDetails = ({ listings, user, bookings }) => {
  const { id } = useParams();
  const currentBooking = bookings[id]
  const currentListing = listings[currentBooking.listingId]
  const { city, name, state, country, Images, price } = currentListing;
  const { startDate, endDate } = currentBooking;
  const dateString = getTravelDates(startDate, endDate);

  const [displayCancelForm, setDisplayCancelForm] = useState(false)

  const toggleCancel = () => {
    setDisplayCancelForm(prev => !prev);
  }

  return (
    <>
      <h1>{city}, {state}</h1>
      <p>{dateString}</p>
      <button onClick={toggleCancel}>Cancel Reservation</button>
      {displayCancelForm &&
      <CancelBooking
        booking={currentBooking}
        setVisible={setDisplayCancelForm}
        user={user}
      />}
    </>
  )
}

export default BookingDetails