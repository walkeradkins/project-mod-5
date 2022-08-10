import './UserBookings.css'
import { useEffect, useState } from 'react';
import BookingLink from '../BookingLink';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';
import { useParams, Link } from 'react-router-dom';
import NoTripsCard from '../NoTripsCard'
import UnauthorizedUser from '../UnauthorizedUser';
import BookingsBanner from '../BookingsBanner'

const UserBookings = ({ user, users }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let listings = useSelector(state => state.listings);
  let userBookings = useSelector(state => state.bookings.bookings);
  const today = new Date().setHours(0, 0, 0, 0);

  const pastBookings = userBookings.filter(({ endDate }) =>
    new Date(endDate).setHours(0, 0, 0, 0) < today);

  const futureBookings = userBookings.filter(({ endDate }) =>
    new Date(endDate).setHours(0, 0, 0, 0) > today);

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
      <BookingsBanner />
      <p className='header-subtitle'>Where you're going</p>
      <div className='bookings__grid'>
        {futureBookings.map(booking =>
          <div key={booking.id}>
            <BookingLink
              listing={listings[booking.listingId]}
              booking={booking}
              user={user}
              users={users}
            />
          </div>
        )}
      </div>
      <h2 className='header-subtitle'>Where you've been</h2>
      <div className='bookings__grid'>
        {pastBookings.map(booking =>
          <div key={booking.id}>
            <BookingLink
              listing={listings[booking.listingId]}
              booking={booking}
              user={user}
              users={users}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserBookings;