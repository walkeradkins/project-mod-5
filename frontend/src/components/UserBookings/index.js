import './UserBookings.css'
import { useEffect } from 'react';
import BookingLink from '../BookingLink';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';


const UserBookings = ({ user }) => {

  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings);
  const userBookings = useSelector(state => state.bookings)
  const { bookings } = userBookings;

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings())
  }, [dispatch]);

  const bookingData = []

  bookings.forEach(booking => {
    bookingData.push(listings[booking.listingId])
  })

  return (
    <>
    <h2>Where you're going</h2>
      <ul>
        {bookings.map(booking =>
          <li key={booking.id}>
            <BookingLink listing={listings[booking.listingId]} booking={booking} user={user}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default UserBookings;