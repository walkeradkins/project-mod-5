import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListings } from '../../store/listings';


const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [location, setLocation] = useState('')
  const [sentLocation, setSentLocation] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings);

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSentLocation(true)

    const alteredLocation = location
      .toLowerCase()
      .trim()
      .split(' ')
      .join('');

    console.log('altered string: ', alteredLocation)

    if (sentLocation) {
      history.push(`/search/${alteredLocation}`)
      setLocation('');
    }
  };

  return (
    <div className='navbar__search'>

      <input
        className='navbar__search-input'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <span onClick={handleSearch} className="material-symbols-outlined navbar__search-icon">search</span>

    </div>
  )
}

export default SearchBar;