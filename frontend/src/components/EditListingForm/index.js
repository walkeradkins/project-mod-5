import './EditListingForm.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ValidationError } from '../../utils/validationError';
import { editListing } from '../../store/listings'
import EditImageForm from '../EditImageForm'
import { countries } from '../utils';

const EditListingForm = ({ listing, visible, showModal, setShowModal, user }) => {

  const dispatch = useDispatch();
  // const listings = useSelector(state => state.listings);
  const history = useHistory();

  const [errorMessages, setErrorMessages] = useState({});
  const [address, updateAddress] = useState(listing.address);
  const [city, updateCity] = useState(listing.city);
  const [state, updateState] = useState(listing.state);
  const [country, updateCountry] = useState(listing.country);
  const [name, updateName] = useState(listing.name);
  const [price, updatePrice] = useState(listing.price);
  const [cleaningFee, updateCleaningFee] = useState(listing.cleaningFee);
  const [serviceFee, updateServiceFee] = useState(listing.serviceFee);
  const [accepted, setAccepted] = useState(false);
  const [showEditModal, setShowEditModal] = useState(true)

  if (!showModal) return null

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      address,
      city,
      state,
      country,
      name,
      price
    };

    let updatedListing;

    try {
      updatedListing = await dispatch(editListing(payload, listing.id));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString().slice(7) });
    }

    if (updatedListing) {
      setErrorMessages({});
      setAccepted(true)
      setShowModal(true)
      console.log('showEditModal', showEditModal)
      // setId(newListing.id)
      // reset()
    }
  }

  return (
    showModal && !accepted ? (
      <div className='edit-listing-container container'>
        <h1 className='header-title'>Edit Your Listing</h1>
        <form className='edit-listing' onSubmit={handleSubmit}>
          <div className='edit-listing-form'>
            <span className='edit-listing__input-container'>
              <p>Address</p>
              <input
                className='edit-listing__input'
                type='text'
                required
                value={address}
                onChange={(e) => updateAddress(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>City</p>
              <input
                className='edit-listing__input'
                type='text'
                required
                value={city}
                onChange={(e) => updateCity(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>State</p>
              <input
                className='edit-listing__input'
                type='text'
                required
                value={state}
                onChange={(e) => updateState(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>Country</p>
              <select
                className='edit-listing__input'
                value={country}
                onChange={(e) => updateCountry(e.target.value)}
              >
                <option value={country} selected>{country}</option>
                {countries.map(country => {
                  return <option
                    key={country}
                    value={country}
                  >{country}</option>
                })}
              </select>
            </span>
            <span className='edit-listing__input-container'>
              <p>Name</p>
              <input
                className='edit-listing__input'
                type='text'
                required
                value={name}
                onChange={(e) => updateName(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>Price</p>
              <input
                className='edit-listing__input'
                type='number'
                required
                value={price}
                onChange={(e) => updatePrice(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>Cleaning Fee</p>
              <input
                className='edit-listing__input'
                type='number'
                required
                value={cleaningFee}
                onChange={(e) => updateCleaningFee(e.target.value)}
              />
            </span>
            <span className='edit-listing__input-container'>
              <p>Service Fee</p>
              <input
                className='edit-listing__input'
                type='number'
                required
                value={serviceFee}
                onChange={(e) => updateServiceFee(e.target.value)}
              />
            </span>
            <div className='edit-listing__btn-container'>
              <button className='edit-listing-form__btn btn' type="submit">Save and Edit Photos</button>
              <button className='edit-listing-form__btn btn' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>)
      :
      (
        <EditImageForm setShowModal={setShowModal} listing={listing} />
      )
  )
};

export default EditListingForm;