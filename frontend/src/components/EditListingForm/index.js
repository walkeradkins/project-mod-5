import './EditListingForm.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ValidationError } from '../../utils/validationError';
import { editListing } from '../../store/listings'
import EditImageForm from '../EditImageForm'

const EditListingForm = ({ listing, visible, setVisible, user }) => {
  console.log(listing)
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

  if (!visible) return null

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
      // setId(newListing.id)
      // reset()
    }
  }

  return (
    visible && !accepted ? (
      <div className='edit-listing-container container'>
        <h1 className='header-title'>Edit Your Listing</h1>
        <form className='edit-listing' onSubmit={handleSubmit}>
          <div className='edit-listing-form'>
            <label className='edit-listing__input-label'>
              Address
              <input
                className='edit-listing__input'
                type='text'
                required
                value={address}
                onChange={(e) => updateAddress(e.target.value)}
              />
            </label>
            <label>
              City
              <input
                className='edit-listing__input'
                type='text'
                required
                value={city}
                onChange={(e) => updateCity(e.target.value)}
              />
            </label>
            <label>
              State
              <input
                className='edit-listing__input'
                type='text'
                required
                value={state}
                onChange={(e) => updateState(e.target.value)}
              />
            </label>
            <label>
              country
              <input
                className='edit-listing__input'
                type='text'
                required
                value={country}
                onChange={(e) => updateCountry(e.target.value)}
              />
            </label>
            <label>
              Name
              <input
                className='edit-listing__input'
                type='text'
                required
                value={name}
                onChange={(e) => updateName(e.target.value)}
              />
            </label>
            <label>
              Price
              <input
                className='edit-listing__input'
                type='number'
                required
                value={price}
                onChange={(e) => updatePrice(e.target.value)}
              />
            </label>
            <label>
              Cleaning Fee
              <input
                className='edit-listing__input'
                type='number'
                required
                value={cleaningFee}
                onChange={(e) => updateCleaningFee(e.target.value)}
              />
            </label>
            <label>
              Service Fee
              <input
                className='edit-listing__input'
                type='number'
                required
                value={serviceFee}
                onChange={(e) => updateServiceFee(e.target.value)}
              />
            </label>
            <div className='edit-listing__btn-container'>
              <button className='edit-listing-form__btn btn' type="submit">Save and Edit Photos</button>
              <button className='edit-listing-form__btn btn' onClick={() => setVisible(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>)
      :
      (
        <EditImageForm listing={listing} />
      )
  )
};

export default EditListingForm;