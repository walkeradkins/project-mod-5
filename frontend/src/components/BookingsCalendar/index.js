import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react'

const BookingsCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date)
  }

  return (
    <div>
      <Calendar minDate={new Date()} selectRange  onChange={onChange} value={date} />
      {console.log(date.toString())}
    </div>
  )
}

export default BookingsCalendar