import './ListingsBrowser.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getListings } from '../../store/listings';
import { Link } from 'react-router-dom'

const ListingsBrowser = () => {
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  console.log('listings:: ', listings)
  return (
    sessionUser &&
    <div>
      <h1>Greetings from Listings Broswer</h1>
      <ul>
        {listings.map(listing => {
          return (
            <li key={listing.id}>
              <Link to={`/listings/${listing.id}`}>
                <img src={listing.Images[0].url} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default ListingsBrowser;