import './UserBookings.css'
import { useEffect, useState } from 'react';
import BookingLink from '../BookingLink';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';
import { useParams, Link } from 'react-router-dom';
import NoTripsCard from '../NoTripsCard'
import UnauthorizedUser from '../UnauthorizedUser';

const UserBookings = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let listings = useSelector(state => state.listings);
  let userBookings = useSelector(state => state.bookings.bookings)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings());
  }, [dispatch]);


  if (!listings.listings.length) return null;
  if (!userBookings) return null;

  if (user.id !== +id) {
    return (
      <>
      <UnauthorizedUser type={'booking'} userId={user.id} />
      </>
    )
  }

  if (!userBookings.length) {
    return (
      <>
        <h2 className='notrips header-title'>Trips</h2>
        <NoTripsCard />
      </>
    )
  }


  return (
    <div className='container'>
      <h2 className='header-title'>Trips</h2>
      <ul className='row'>
        {userBookings.map(booking =>
          <li key={booking.id}>
            <BookingLink listing={listings[booking.listingId]} booking={booking} user={user} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default UserBookings;