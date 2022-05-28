import './ListingsBrowser.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getListings } from '../../store/listings';
import { Link } from 'react-router-dom'
import ListingCard from '../ListingCard';

const ListingsBrowser = () => {
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    sessionUser &&
    <div className='listings'>
      <ul className='listings listings__cards'>
        {listings.map(listing => {
          return (
            <li key={listing.id}>
              <ListingCard listing={listing} />
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default ListingsBrowser;