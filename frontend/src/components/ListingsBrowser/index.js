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
    <div className='container'>
      <ul className='row'>
        {listings.map(listing => {
          return (
            listing.Images.length &&
            <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={listing.id} >
              <ListingCard listing={listing} />
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default ListingsBrowser;