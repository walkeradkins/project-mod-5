import './ListingForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { createNewListing } from '../../store/listings'
import ErrorMessage from '../ErrorMessage/'
import ImageForm from '../ImageForm';
import { countries } from '../utils';

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
      console.log('error here:: ', error)
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString()});
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
      (<div className='listing-container container'>
        <h1 className='header-title'>Open your door to hosting</h1>
        <ErrorMessage message={errorMessages.overall} />
        <form className='create-listing' onSubmit={handleSubmit}>
          <div className='listing-form'>
          <input
            className='listing-form__input'
            type='text'
            minLength='3'
            maxLength='50'
            placeholder='Address'
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className='listing-form__input'
            type='text'
            placeholder='City'
            minLength='2'
            maxLength='50'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className='listing-form__input'
            type='text'
            placeholder='State/Province'
            minLength='2'
            maxLength='50'
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <select
            className='listing-form__input'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value='' selected disabled hidden>Country</option>
            {countries.map(country => {
              return <option
              key={country}
              value={country}
              >{country}</option>
            })}
          </select>
          <input
            className='listing-form__input'
            type='text'
            placeholder='Name'
            minLength='3'
            maxLength='150'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            className='listing-form__input'
            placeholder='Price / Night'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type='number'
            className='listing-form__input'
            placeholder='One time cleaning fee'
            required
            value={cleaningFee}
            onChange={(e) => setCleaningFee(e.target.value)}
          />
          <input
            type='number'
            className='listing-form__input'
            placeholder='One time service fee'
            required
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
          />
          <button className='btn listing-form__btn' type="submit">Upload Images</button>
          </div>
        </form>
      </div>) :
      <div className='listing-form__image-container container'>
        <p className='header-title listing-form__header'>Please add at least five images of your home</p>
        <ImageForm listingId={id} user={sessionUser}/>
      </div>
  )
}

export default ListingForm;