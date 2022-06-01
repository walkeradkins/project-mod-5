import { ValidationError } from '../utils/validationError'
import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKING';

export const createOne = booking => ({
  type: CREATE_BOOKING,
  booking
});

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

const initialState = { bookings: [] };
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      if (!state[action.booking.id]) {
        const newState = {
          ...state,
          [action.booking.id]: action.booking
        }
        return newState;
      };
      default:
      return state;
  }
}

export default bookingsReducer;
