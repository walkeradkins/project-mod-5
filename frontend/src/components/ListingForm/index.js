import './ListingForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { createNewListing } from '../../store/listings'
import ErrorMessage from '../ErrorMessage/'
import ImageForm from '../ImageForm';
import { countries, amenities } from '../utils';
import HostCarousel from '../HostCarousel';
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';
import PlacesAutocomplete from '../AutoCompleteInput'

const ListingForm = () => {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState({});
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [homeType, setHomeType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [totalGuests, setTotalGuests] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [cleaningFee, setCleaningFee] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const homeTypes = [
    'Entire Home',
    'Entire Cabin',
    'Entire Cottage',
    'Private Room',
    'Camper/RV',
    'Island',
    'Shared Room'
  ]

  const nums = [];
  for (let i = 1; i <= 30; i++) nums.push(i);

  const bathNums = [];
  for (let j = 1; j <= 10; j += 0.5) bathNums.push(j);

  const getAmenitiesString = () => {
    let amenities = selectedOption.map(option => option.value);
    return amenities.join();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { country, county, city, state, street, streetNumber } = location;
    const checkAddress = street ? `${streetNumber} ${street}` : `${street}`

    const payload = {
      userId: sessionUser.id,
      address: checkAddress,
      city: city ? city : county,
      state,
      country,
      name,
      price,
      cleaningFee,
      serviceFee,
      type: homeType,
      guests: totalGuests,
      bedrooms,
      beds,
      description,
      baths,
      amenities: getAmenitiesString()
    };

    console.log('payload::: ', payload)
    let newListing;

    try {
      newListing = await dispatch(createNewListing(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString() });
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
    // setCity('');
    // setState('');
    // setCountry('');
    setName('');
    setPrice('');
    setAccepted('');
    setHomeType('');
    setTotalGuests('');
    setBedrooms('');
    setBeds('');
    setBaths('');
    setDescription('');
    setCleaningFee(0);
    setServiceFee(0);
  }

  return (
    <div className='listing-form__page'>
      <div className='listing-form__header container'>
        <div className='listing-form__header-left'>
          <h1 className='listing-form__header-title'>Open your door to hosting</h1>
        </div>
        <div className='listing-form__header-right'>
          <HostCarousel />
        </div>
      </div>
      {!accepted ?
        (<div className='listing-container container'>
          <ErrorMessage message={errorMessages.overall} />
          <form className='create-listing' onSubmit={handleSubmit}>
            <div className='listing-form__top'>
              <PlacesAutocomplete setLocation={setLocation}/>
              {/* <input
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
                <option value='' defaultValue disabled hidden>Country</option>
                {countries.map(country => {
                  return <option
                    key={country}
                    value={country}
                  >{country}</option>
                })}
              </select> */}
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
            </div>
            <div className='listing-form__middle'>
              <input
                type='number'
                className='listing-form__input-middle'
                placeholder='Price / Night'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type='number'
                className='listing-form__input-middle'
                placeholder='One time cleaning fee'
                required
                value={cleaningFee}
                onChange={(e) => setCleaningFee(e.target.value)}
              />
              <input
                type='number'
                className='listing-form__input-middle'
                placeholder='One time service fee'
                required
                value={serviceFee}
                onChange={(e) => setServiceFee(e.target.value)}
              />
              <select
                className='listing-form__input-middle'
                value={homeType}
                onChange={(e) => setHomeType(e.target.value)}
              >
                <option value='' defaultValue disabled hidden>Home Type</option>
                {homeTypes.map(type => {
                  return <option
                    key={type}
                    value={type}
                  >{type}</option>
                })}
              </select>
              <select
                className='listing-form__input-middle'
                value={totalGuests}
                onChange={(e) => setTotalGuests(e.target.value)}
              >
                <option value='' defaultValue disabled hidden>Total Guests</option>
                {nums.map((num, ind) => {
                  if (ind < 30) {
                    return <option
                      key={num}
                      value={num}
                    >{num}</option>
                  }
                })}
              </select>
              <select
                className='listing-form__input-middle'
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value='' defaultValue disabled hidden>Bedrooms</option>
                {nums.map((num, ind) => {
                  if (ind < 15) {
                    return <option
                      key={num}
                      value={num}
                    >{num}</option>
                  }
                })}
              </select>
              <select
                className='listing-form__input-middle'
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
              >
                <option value='' defaultValue disabled hidden>Beds</option>
                {nums.map((num, ind) => {
                  if (ind < 15) {
                    return <option
                      key={num}
                      value={num}
                    >{num}</option>
                  }
                })}
              </select>
              <select
                className='listing-form__input-middle'
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              >
                <option value='' defaultValue disabled hidden>Baths</option>
                {bathNums.map((num, ind) => {
                  return <option
                    key={num}
                    value={num}
                  >{num}</option>
                })}
              </select>
            </div>
            <div className='listing-form__amenities'>
              <Select
                defaultValue={selectedOption}
                closeMenuOnSelect={false}
                isMulti
                placeholder='Ameneties...'
                onChange={setSelectedOption}
                options={amenities}
              />
            </div>
            <div className='listing-form__bottom'>
              <div className='listing-form__textarea-container'>
                <TextareaAutosize
                  className='listing-form__textarea'
                  maxLength={2000}
                  placeholder='Tell us about your home'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minRows={5}
                />
                <p className='rating__charcount'>{`${description.length}/2000`}</p>
              </div>
            </div>
            <button className='btn listing-form__btn' type="submit">Upload Images</button>
          </form>
        </div>) :
        <ImageForm listingId={id} user={sessionUser} />}
    </div>
  )
}

export default ListingForm;