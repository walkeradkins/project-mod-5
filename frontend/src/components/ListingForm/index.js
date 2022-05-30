import './ListingForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import {createNewListing, getListings} from '../../store/listings'
import ErrorMessage from '../ErrorMessage/'

const ListingForm = () => {
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState({});
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      address,
      city,
      state,
      country,
      name,
      price
    };

    let newListing;

    try {
      newListing = await dispatch(createNewListing(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({overall: error.toString().slice(7)});
    }

    if (newListing) {
      setErrorMessages({});
      history.push(`/listings/${newListing.id}`)
    }
  }
  return (
    <div>
      <h1>Listing Form</h1>
      <form className='create-listing' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Address'
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type='text'
          placeholder='City'
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type='text'
          placeholder='State/Province'
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type='text'
          placeholder='Country'
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type='text'
          placeholder='Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Price / Night'
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Create new Listing</button>
      </form>
    </div>

  )
}

export default ListingForm;