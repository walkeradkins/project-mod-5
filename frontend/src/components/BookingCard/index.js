import './BookingCard.css'
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import { ValidationError } from '../../utils/validationError';
import { createNewBooking } from '../../store/bookings'


const BookingCard = ({ listing, user }) => {
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();


  const formatDate = (dateString) => {
    const day = dateString.getDate();
    const month = dateString.getMonth() + 1;
    const year = dateString.getFullYear();
    const formattedDate = `${month}/${day}/${year}`
    return formattedDate
  }

  const today = formatDate(new Date());

  const day = new Date();

  const futureDate = new Date(day.setDate(day.getDate() + 3));
  const initialCheckOutDate = formatDate(futureDate)

  let { price, cleaningFee, serviceFee } = listing
  price = parseInt(price);
  const [errorMessages, setErrorMessages] = useState({});
  const [isUsersListing, setIsUsersListing] = useState(listing.userId == user.id)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [date, setDate] = useState();
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(initialCheckOutDate)
  const [checkInISO, setCheckInISO] = useState(new Date().toISOString().slice(0, 10));
  const [checkOutISO, setCheckOutISO] = useState(futureDate.toISOString().slice(0, 10));
  const [totalDays, setTotalDays] = useState(3);
  const [priceBeforeFees, setPriceBeforeFees] = useState((3 * +price))
  const [totalPrice, setTotalPrice] = useState((3 * +price) + cleaningFee + serviceFee);
  const [totalGuests, setTotalGuests] = useState(1);
  const handleClick = () => {
    setOpenCalendar(prev => !prev);
  }


  const countDays = (firstDate, secondDate) => {
    const days = Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24)) - 1;
    return days;
  }

  const onChange = (date) => {
    setDate(date)
    const checkInDate = date[0];
    const checkOutDate = date[1];
    setCheckInISO(checkInDate.toISOString().slice(0, 10));
    setCheckOutISO(checkOutDate.toISOString().slice(0, 10));
    const days = countDays(checkInDate, checkOutDate);
    setTotalDays(days);
    setPriceBeforeFees(days * price)
    setTotalPrice((days * price) + cleaningFee + serviceFee)
    setCheckIn(formatDate(checkInDate));
    setCheckOut(formatDate(checkOutDate));

    setOpenCalendar(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      listingId: listing.id,
      startDate: checkInISO,
      endDate: checkOutISO,
      totalDays,
      totalPrice,
      totalGuests: +totalGuests
    }

    let newBooking;

    try {
      newBooking = await dispatch(createNewBooking(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString().slice(7) });
      // console.log('errors:: ', errorMessages);
    }

    if (newBooking) {
      setErrorMessages({});
      history.push(`/users/${user.id}/bookings`)
    }
  }

  return (
    sessionUser &&
    <>
      <form className='booking' onSubmit={handleSubmit}>
        <span className='booking__header'>
          <span className='booking__price'>
            <p className='booking__amount'>${price}</p>
            <p className='booking__night'>night</p>
          </span>
          <button className='btn' type='button' onClick={() => handleClick()}>dates</button>
        </span>
        <ul>
          <li className='booking__text-check'>
            <p className='booking__text-check-text'>CHECK-IN</p>
            <p className='booking__text-check-date'>{checkIn}</p>
          </li>
          <li className='booking__text-check'>
            <p className='booking__text-check-text'>CHECK-OUT</p>
            <p className='booking__text-check-date'>{checkOut}</p>
          </li>
        </ul>
        {openCalendar &&
          <Calendar
            className='booking__calender'
            minDate={new Date()}
            selectRange
            onChange={onChange}
            value={date}
          />}
        <div>
          <label className='booking__text'>
            Guests
            <select
              onChange={(e) => setTotalGuests(e.target.value)}
              value={totalGuests}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          {!isUsersListing &&
          <button className='btn btn-reserve' type='submit'>Reserve</button>}
          {isUsersListing &&
          <button className='booking__text btn' disabled='true'>This is how your listing appears to users</button>
          }
          <p className='booking__text-charge'>You won't actually be charged</p>
          <ul>
            <li className='booking__text'>
              <p>${price} x {totalDays} nights</p>
              <p>${priceBeforeFees}</p>
            </li>
            <li className='booking__text'>
              <p>Cleaning fee </p>
              <p>${cleaningFee}</p>
            </li>
            <li className='booking__text underline booking__text-lastline'>
              <p>Service fee</p>
              <p>${serviceFee}</p>
            </li>
            <li className='booking__text booking__text-total'>
              <p>Total before taxes </p>
              <p>${totalPrice}</p>
            </li>
          </ul>
        </div>
      </form>
    </>

  )
}

export default BookingCard