import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';

const load = listings => ({
  type: LOAD_LISTINGS,
  listings
})

// thunk action creators
// getting listings
export const getListings = () => async dispatch => {
  const response = await csrfFetch(`/api/listings`);

  if (response.ok) {
    const listings = await response.json();
    dispatch(load(listings));
  }
};

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
    default:
      return state;
  }
};

export default listingsReducer;