import './CitySearch.css'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListingCard from '../ListingCard';
import PageNotFound from '../PageNotFound';

const CitySearch = () => {

  const alterString = (string) => {
    return string
      .toLowerCase()
      .trim()
      .split(' ')
      .join('');
  }

  let {location} = useParams();
  location = location.toLowerCase();
  const sessionUser = useSelector(state => state.session.user);
  const filteredListings = useSelector(state => state.listings.listings.filter(listing => {
    return alterString(listing.city) === location
      || alterString(listing.state) === location
      || alterString(listing.country) === location;
  }));

  if (!filteredListings.length) {
    return (
      <PageNotFound />
    )
  }

  return (
    sessionUser &&
    <ul className='container grid-container'>
      {filteredListings.map(listing => {
        return (
          listing.Images.length &&
          <li className="grid-item" key={listing.id} >
            <ListingCard listing={listing} />
          </li>
        )
      })}
    </ul>
  )
}

export default CitySearch;