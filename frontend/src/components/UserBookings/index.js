import './UserBookings.css'
import { useEffect, useState } from 'react';
import BookingLink from '../BookingLink';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';
import { useParams, Link } from 'react-router-dom';

const UserBookings = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let listings = useSelector(state => state.listings);
  let userBookings = useSelector(state => state.bookings.bookings)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings());

    if (userBookings.length === 0) {
      userBookings = JSON.parse(localStorage.getItem('userBookings'))
    }

    if (Object.keys(listings).length == 1) {
      listings = JSON.parse(localStorage.getItem('listings'))
    }
    localStorage.setItem('listings', JSON.stringify(listings))
    localStorage.setItem('bookings', JSON.stringify(userBookings))
  }, [dispatch]);

  if (user.id !== +id) {
    return (
      <div>
        <p>Looks like these aren't your trips...</p>
        <ul>
          <li><Link to={`/users/${user.id}/bookings`}>Your Bookings</Link></li>
          <li><Link to='/'>Back to all listings</Link></li>
        </ul>
      </div >
    )
  }

  return (
    <>
      <h2>Where you're going</h2>
      <ul>
        {userBookings.map(booking =>
          <li key={booking.id}>
            <BookingLink listing={listings[booking.listingId]} booking={booking} user={user} />
          </li>
        )}
      </ul>
    </>
  )
}

export default UserBookings;