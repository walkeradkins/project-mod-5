import './UserBookings.css'
import BookingLink from '../BookingLink'

const UserBookings = ({ listings, bookings, user }) => {
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