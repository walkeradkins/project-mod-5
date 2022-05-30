import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';
const LOAD_ONE = 'listings/LOAD_ONE';

const load = listings => ({
  type: LOAD_LISTINGS,
  listings
});

const loadOne = listing => ({
  type: LOAD_ONE,
  listing
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

export const getOneListing = (id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}`);

  if (response.ok) {
    const listing = await response.json();
    // console.log('listing from getOneListing: ', listing)
    dispatch(loadOne(listing));
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
      console.log('state',...state)
      return {
        ...state,
        current: action.listing
        }
   default:
      return state;
  }
};

export default listingsReducer;