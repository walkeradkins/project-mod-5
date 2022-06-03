import { ValidationError } from '../utils/validationError'
import { csrfFetch } from './csrf';

const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';
const LOAD_ONE = 'listings/LOAD_ONE';
const CREATE_ONE = 'listings/CREATE_ONE';
const UPDATE_ONE = 'listings/UPDATE_ONE';
const REMOVE_ONE = 'listings/REMOVE_ONE';

export const load = listings => ({
  type: LOAD_LISTINGS,
  listings
});

export const loadOne = listing => ({
  type: LOAD_ONE,
  listing
});

export const createOne = newListing => ({
  type: CREATE_ONE,
  newListing
});

export const updateOne = updatedListing => ({
  type: UPDATE_ONE,
  updatedListing
});

export const removeListing = listingToRemove => ({
  type: REMOVE_ONE,
  listingToRemove
});

// thunk action creators
// getting listings
export const getListings = () => async dispatch => {
  const response = await csrfFetch(`/api/listings`);

  if (response.ok) {
    const listings = await response.json();
    dispatch(load(listings));
  }
};

export const getOneListing = (id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}`);

  if (response.ok) {
    const listing = await response.json();
    dispatch(loadOne(listing));
  }
}

export const createNewListing = (payload) => async dispatch => {
  try {
    const response = await csrfFetch(`/api/listings`, {
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
        console.log('errors here', response.statusText)
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
    const listing = await response.json();
    dispatch(createOne(listing));
    return listing;
  } catch (error) {
    throw error;
  }
}

export const editListing = (payload, listingId) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${listingId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updatedListing = await response.json();
    dispatch(updateOne(updatedListing));
    return updatedListing
  }
}

export const deleteListing = (id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const deletedListing = await response.json();
    dispatch(removeListing(deletedListing));
    return deletedListing;
  }
}

// reducer
const initialState = { listings: [] };
const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTINGS:
      const allListings = {};
      action.listings.forEach(listing => {
        allListings[listing.id] = listing;
      });
      return {
        ...allListings,
        ...state,
        listings: action.listings
      };
    case LOAD_ONE:
      return {
        ...state,
        current: action.listing
      };
    case CREATE_ONE:
      if (!state[action.newListing.id]) {
        const newState = {
          ...state,
          [action.newListing.id]: action.newListing
        }
        return newState;
      };
    case UPDATE_ONE:
      const updatedState = {
        ...state,
        [action.updatedListing.id]: {
          ...state[action.updatedListing.id],
          ...action.updatedListing
        }
      }
      return updatedState;
    case REMOVE_ONE:
      const newState = {...state};
      delete newState[action.listingToRemove.id];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;