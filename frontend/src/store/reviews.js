import { ValidationError } from "../utils/validationError"
import { csrfFetch } from './csrf'

export const CREATE_REVIEW = 'images/CREATE_REVIEW';

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const createNewReview = (payload, id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}/review`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
  const review = await response.json();
  dispatch(createReview(review));
  return review;
}

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      if (!state[action.review.id]) {
        const newState = {
          ...state,
          [action.review.id]: action.review
        }
        return newState;
      };
    default:
      return state;
  }
}

export default reviewsReducer;
