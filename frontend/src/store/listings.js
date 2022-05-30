import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';
const LOAD_ONE = 'listings/LOAD_ONE';

const load = listings => ({
  type: LOAD_LISTINGS,
  listings
});

const loadOne = listings => ({
  type: LOAD_ONE,
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

export const getOneListing = (id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}`);

  if (response.ok) {
    const listing = await response.json();
    console.log(listing)
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
      // if (!state[action.listing.id]) {
      //   const newState = {
      //     ...state,
      //     [action.listing.id]: action.listing
      //   };
      //   const listings = newState.listings.map(id => newState[id])
      //   listings.push(action.listing);
      //   return listings
      // };
      return {
        ...state,
        [action.listing.id]: {
          ...state[action.listing.id],
          ...action.listing
        }
      };
    default:
      return state;
  }
};

export default listingsReducer;