import './BookingDetails.css';
import { useParams, Link } from 'react-router-dom';
import { getTravelDates } from '../utils'
import CancelBooking from '../CancelBooking';
import { useState, useEffect } from 'react';
import ReservationDetailsCard from '../ReservationDetailsCard';
import { useDispatch, useSelector } from "react-redux";
import { getListings } from '../../store/listings';
import { getBookings } from '../../store/bookings';
import PhotoCarousel from '../Carousel';
import UnauthorizedUser from '../UnauthorizedUser';
import Map from '../Map';
import { Modal } from '../../context/Modal';

const BookingDetails = ({ user, users }) => {
  const { userId, id } = useParams();
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.bookings)
  const listings = useSelector(state => state.listings);
  const URL = window.location.href.split('/');
  const [showModal, setShowModal] = useState(false)
  const [onBookings, setOnBookings] = useState(URL.length === 7 && URL[5] === 'bookings');

  const [displayCancelForm, setDisplayCancelForm] = useState(false)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings());
  }, [dispatch]);

  useEffect(() => {
    if (onBookings) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflowY = "initial");
    }
  }, [dispatch, onBookings]);

  if (+userId !== +user.id) {
    return (
      <UnauthorizedUser type={'booking'} userId={user.id} />
    )
  }
  if (!bookings.bookings.length) return null;
  if (!listings.listings.length) return null;

  const currentBooking = bookings[id];
  const currentListing = listings[currentBooking.listingId];
  if (!currentListing.Images) return null;

  const today = new Date().setHours(0, 0, 0, 0);
  const date = new Date(currentBooking.endDate).setHours(0, 0, 0, 0);
  const isPast = date < today;

  const { city, name, state, country, Images, price, coordinates } = currentListing;
  const { startDate, endDate } = currentBooking;
  const host = users[currentListing.userId]
  const dateString = getTravelDates(startDate, endDate);

  const toggleCancel = () => {
    setDisplayCancelForm(prev => !prev);
  }

  return (
    <>
      <div className='booking__details'>
        <div className='booking__details-left'>
          <h1 className='booking__details-location header-title'>{city}, {state}, {country}</h1>
          <p className='booking__details-dates header-subtitle'>{dateString}</p>
          <PhotoCarousel images={Images} />
          <ReservationDetailsCard
            listing={currentListing}
            user={user}
            booking={currentBooking}
            host={host}
          />
          {!isPast &&
            <button className='booking__cancel btn' onClick={() => setShowModal(true)}>Cancel Reservation</button>
          }
        </div>
        <div className='booking__details-right'>
          {isPast && <h1 className='booking__details-location header-title'>Where you stayed</h1>}
          {!isPast && <h1 className='booking__details-location header-title'>Where you'll be staying</h1>}
          <Map location={JSON.parse(coordinates)} />
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)}>
        <div className='cancel-container'>
          <CancelBooking
            booking={currentBooking}
            setShowModal={setShowModal}
            user={user}
          />
        </div>
      </Modal>}
    </>
  )
}

export default BookingDetails