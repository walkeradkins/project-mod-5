import './ImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings } from '../../store/listings'
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'

const ImageForm = ({ listingId, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [imageURLs, setImageURLs] = useState([
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" }
  ]);
  const [created, setCreated] = useState(false);

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === user.id;
  }));

  const handleChange = (i, e) => {
    let newFormValues = [...imageURLs];
    newFormValues[i][e.target.name] = e.target.value;
    setImageURLs(newFormValues);
  }

  const addFormFields = () => {
    setImageURLs([...imageURLs, { url: "" }])
  }

  const removeFormFields = (i) => {
    let newFormValues = [...imageURLs];
    newFormValues.splice(i, 1);
    setImageURLs(newFormValues)
  }

  useEffect(() => {
    dispatch(getListings())
  }, [created]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    imageURLs.map(imageURL => {
      imageURL['listingId'] = listingId;
    })
    const payload = {
      imageURLs
    };

    let images;
    try {
      images = await dispatch(createNewImages(payload, listingId))
    } catch (error) {
      // TODO error handle
    }
    if (images) {
      setCreated(true)
      reset();
      history.push(`/users/${user.id}/listings`)
    }
  }

  const reset = () => {
    setImageURLs([{ url: "" }]);
    setCreated(false)
  }

  return (
      <>
      <p className='header-title listing-form__image-title'>Please add at least five images of your home</p>
      <form onSubmit={handleSubmit} autoComplete="off" className='listing-form__image-container container'>
        {imageURLs.map((element, index) => (
          <div className='booking-link__container' key={index}>
            <figure className='booking-link__image' style={{ backgroundImage: `url( ${element.url} )` }} />
            <input
              placeholder='Image URL'
              className='booking_link__input'
              type="text"
              required
              name="url"
              value={element.url || ""}
              onChange={e => handleChange(index, e)}
            />
            {index > 4 ?
              <button type="button" className="remove-booking-link-listing__button btn" onClick={() => removeFormFields(index)}>X</button>
              : null}
          </div>
        ))}
        <div className='booking-link__button-container'>
          <button className='booking-link__button btn' type="button" onClick={() => addFormFields()}>Add Another Photo</button>
          <button className='booking-link__button btn' type="submit" disabled={imageURLs.length < 5}>Submit</button>
        </div>
      </form>
      </>
  )
}

export default ImageForm
