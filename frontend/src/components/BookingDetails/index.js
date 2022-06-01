import './BookingDetails.css';
import { useParams } from 'react-router-dom';

const BookingDetails = ({ listings, user, bookings }) => {
  const { id } = useParams();
  console.log(bookings)
  return (
    <h1>Booking Details</h1>
  )
}

export default BookingDetails