import { ValidationError } from '../utils/validationError'
import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const LOAD_BOOKINGS = 'bookings/GET_BOOKINGS';
const DELETE_BOOKING = 'bookings/DELETE-BOOKING';

export const createOne = booking => ({
  type: CREATE_BOOKING,
  booking
});

export const load = bookings => ({
  type: LOAD_BOOKINGS,
  bookings
});

export const removeBooking = removedBooking => ({
  type: DELETE_BOOKING,
  removedBooking
})

export const createNewBooking = (payload) => async dispatch => {
  try {
    const response = await csrfFetch(`/api/bookings`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      let error;
      if (response.status === 422) {
        error = await response.json();
        throw new ValidationError(error.errors, response.statusText);
      } else {
        let errorJSON;
        error = await response.text();
        try {
          errorJSON = JSON.parse(error);
        } catch {
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
      }
    }
    const booking = await response.json();
    dispatch(createOne(booking));
    return booking;
  } catch (error) {
    throw error;
  }
}

export const getBookings = () => async dispatch => {
  const response = await csrfFetch(`/api/bookings`);

  if (response.ok) {
    const bookings = await response.json();
    dispatch(load(bookings));
  }
}

export const deleteBooking = (id) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const deletedBooking = await response.json();
    dispatch(removeBooking(deletedBooking));
    return deletedBooking;
  }
}

const initialState = { bookings: [] };
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      const allBookings = {};
      action.bookings.forEach(booking => {
        allBookings[booking.id] = booking;
      });
      return {
        ...allBookings,
        ...state,
        bookings: action.bookings
      };
    case CREATE_BOOKING:
      if (!state[action.booking.id]) {
        const newState = {
          ...state,
          [action.booking.id]: action.booking
        }
        return newState;
      };
    case DELETE_BOOKING:
      const newState = {...state};
      delete newState[action.removedBooking.id]
      return newState;
    default:
      return state;
  }
}

export default bookingsReducer;
