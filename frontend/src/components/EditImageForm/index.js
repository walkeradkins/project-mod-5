import './EditImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { editImages, createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'


const EditImageForm = ({ listing, setShowModal }) => {
  const sessionUser = useSelector(state => state.session.user);
  const { id, Images } = listing
  const history = useHistory();
  const dispatch = useDispatch();
  const [imageURLs, setImageURLs] = useState([...Images])

  let handleChange = (i, e) => {
    let newFormValues = [...imageURLs];
    newFormValues[i][e.target.name] = e.target.value;
    setImageURLs(newFormValues);
  }

  let addFormFields = () => {
    setImageURLs([...imageURLs, { url: "" }])
  }

  const removeFormFields = (i) => {
    let newFormValues = [...imageURLs];
    newFormValues.splice(i, 1);
    setImageURLs(newFormValues)
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    imageURLs.map(imageURL => {
      imageURL['listingId'] = id;
    })

    const newImages = []

    imageURLs.forEach((image, index) => {
      if (!image.id) {
        newImages.push(image);
      }
    })

    const updatedPhotos = imageURLs.filter(image => {
      return (image.id);
    })

    const newImagePayload = { newImages }
    const updatedPayload = { updatedPhotos }

    let updatedImages;
    let newPhotos;

    if (newImages.length) {
      try {
        newPhotos = await dispatch(createNewImages(newImagePayload, id))
      } catch (error) {
        // TODO error handle
      }
    }

    try {
      updatedImages = await dispatch(editImages(updatedPayload, id))
    } catch (error) {
      // TODO error handle
    }

    if (updatedImages) {
      reset();
      setShowModal(false)
      history.push(`/users/${sessionUser.id}/listings`)
    }
  }
  const reset = () => {
    setImageURLs([{ url: "" }]);
  }

  return (
    <>
      <h1 className='header-title'>Edit Your Images</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        {imageURLs.map((element, index) => (
          <div className='edit-listing-container' key={index}>
            <span className='edit-listing__input-container'>
              <figure className='booking-link__image edit-booking-link__image' style={{ backgroundImage: `url( ${element.url} )` }} />
              <input
                placeholder='Image URL'
                className='booking_link__input edit-booking_link__input'
                type="text"
                required
                name="url"
                value={element.url || ""}
                onChange={e => handleChange(index, e)}
              />
              {index > 4 ?
                <button type="button" className="remove-booking-link__button btn" onClick={() => removeFormFields(index)}>X</button>
                : null}
            </span>
          </div>
        ))}
        <div className='edit-booking-link__button-container'>
          <button className='booking-link__button btn' type="button" onClick={() => addFormFields()}>Add Another Photo</button>
          <button className='booking-link__button btn' type="submit" disabled={imageURLs.length < 5}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default EditImageForm;