import './ListingForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { createNewListing } from '../../store/listings'
import ErrorMessage from '../ErrorMessage/'
import ImageForm from '../ImageForm';

const ListingForm = () => {
  const sessionUser = useSelector(state => state.session.user);
  // const listings = useSelector(state => state.listings);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState({});
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [cleaningFee, setCleaningFee] = useState('');
  const [serviceFee, setServiceFee] = useState('');

  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      address,
      city,
      state,
      country,
      name,
      price,
      cleaningFee,
      serviceFee
    };

    let newListing;

    try {
      newListing = await dispatch(createNewListing(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString().slice(7) });
    }

    if (newListing) {
      setErrorMessages({});
      setAccepted(true)
      setId(newListing.id)
      // reset()
    }
  }
  const reset = () => {
    setErrorMessages({})
    setAddress('');
    setCity('');
    setState('');
    setCountry('');
    setName('');
    setPrice('');
    setAccepted('');
    setCleaningFee(0);
    setServiceFee(0);
  }

  return (
    !accepted ?
      (<div>
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
          <input
            type='number'
            placeholder='One time cleaning fee'
            required
            value={cleaningFee}
            onChange={(e) => setCleaningFee(e.target.value)}
          />
          <input
            type='number'
            placeholder='One time service fee'
            required
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
          />
          <button type="submit">Create new Listing</button>
        </form>
      </div>) :
      <ImageForm listingId={id}/>
  )
}

export default ListingForm;