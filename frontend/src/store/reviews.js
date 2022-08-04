import { ValidationError } from "../utils/validationError"
import { csrfFetch } from './csrf'

export const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
export const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const editReview = updatedReview => ({
  type: EDIT_REVIEW,
  updatedReview
});

export const removeReview = deletedReview => ({
  type: DELETE_REVIEW,
  deletedReview
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

export const updateReview = (payload, reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const updatedReview = await res.json();
    dispatch(editReview(updatedReview));
    return updatedReview
  }
}

export const deleteReview = (id) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    const deletedReview = await res.json();
    dispatch(removeReview(deletedReview));
    return deletedReview;
  }
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
    case EDIT_REVIEW:
      const updatedState = {
        ...state,
        [action.updatedReview.id]: {
          ...state[action.updatedReview.id],
          ...action.updatedReview
        }
      }
      return updatedState;
    case DELETE_REVIEW:
      const newState = { ...state };
      delete newState[action.deletedReview.id];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
