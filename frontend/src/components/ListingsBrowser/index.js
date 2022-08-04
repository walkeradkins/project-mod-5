import './ListingsBrowser.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getListings } from '../../store/listings';
import { Link } from 'react-router-dom'
import ListingCard from '../ListingCard';
import { useListing } from '../../context/ListingContext';

const ListingsBrowser = () => {
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);


  return (
    sessionUser &&
    <ul className='container grid-container'>
      {listings.map(listing => {
        return (
          listing.Images.length > 0 &&
          <li className="grid-item" key={listing.id} >
            <ListingCard listing={listing} />
          </li>
        )
      })}
    </ul>
  )
}

export default ListingsBrowser;