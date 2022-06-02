import './CancelBooking.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getBookings } from '../../store/bookings';

const CancelBooking = ({ booking, setVisible, user }) => {
  const [canceled, setCanceled] = useState(false);
  const dispatch = useDispatch();

  const userBookings = useSelector(state => state.bookings.bookings.filter(
    booking => {
      return booking.userId === user.id
    }
  ));

  const history = useHistory();

  useEffect(() => {
    dispatch(getBookings())
  }, [canceled]);

  const handleCancel = async(id) => {
    try {
      await dispatch(deleteBooking(id))
    } catch (error) {
      //
    }
    setCanceled(true);
    setVisible(false);
    history.push(`/users/${user.id}/bookings`)
  }

  return (
    <div className='cancel-booking'>
      <h3 className='cancel-booking__prompt'>Are you sure you want to cancel your reservation?</h3>
      <button className='btn cancel-booking__btn' onClick={() => handleCancel(booking.id)}>Yes, cancel my reservation</button>
      <button className='btn cancel-booking__btn' onClick={() => setVisible(false)}>No, take me back</button>
    </div>
  )
}

export default CancelBooking;