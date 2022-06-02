import './ReservationDetailsCard.css'

const ReservationDetailsCard = ({ listing, user, booking }) => {
  const { totalDays, totalGuests, totalPrice, endDate, startDate } = booking
  const { Images, address } = listing
  return (
    <div className='reservation'>
      <ul>
        <li className='reservation__text'>
            <p className='reservation__detail'>CHECK-IN</p>
            <p className='reservation__value'></p>
        </li>
      </ul>
    </div>
  )
}

export default ReservationDetailsCard;