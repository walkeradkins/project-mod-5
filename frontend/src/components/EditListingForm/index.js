import './EditListingForm.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ValidationError } from '../../utils/validationError';
import { editListing } from '../../store/listings'
import  EditImageForm  from '../EditImageForm'

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
    visible &&  !accepted ? (
    <div>
      <h1>Edit Listing Form</h1>
      <form className='edit-form' onSubmit={handleSubmit}>
        <input
          type='text'
          required
          value={address}
          onChange={(e) => updateAddress(e.target.value)}
        />
        <input
          type='text'
          required
          value={city}
          onChange={(e) => updateCity(e.target.value)}
        />
        <input
          type='text'
          required
          value={state}
          onChange={(e) => updateState(e.target.value)}
        />
        <input
          type='text'
          required
          value={country}
          onChange={(e) => updateCountry(e.target.value)}
        />
        <input
          type='text'
          required
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
        <input
          type='number'
          required
          value={price}
          onChange={(e) => updatePrice(e.target.value)}
        />
        <button type="submit">Save and Edit Photos</button>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </form>
    </div>)
    :
    (
      <EditImageForm listing={listing}/>
    )
  )
};

export default EditListingForm;