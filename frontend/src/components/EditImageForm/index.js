import './EditImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings } from '../../store/listings';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { editImages, createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'


const EditImageForm = ({ listing, setShowEditModal }) => {
  const sessionUser = useSelector(state => state.session.user);
  const { id, Images } = listing
  const [updated, setUpdated] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [imageURLs, setImageURLs] = useState([...Images])

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === sessionUser.id;
  }));

  useEffect(() => {
    dispatch(getListings())
  }, [updated]);

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
    console.log('BITCH')
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

      }
    }

    try {
      updatedImages = await dispatch(editImages(updatedPayload, id))
    } catch (error) {
      // TODO error handle
    }

    setUpdated(true)
    history.push(`/users/${sessionUser.id}/listings`)
    setShowEditModal(false)
  }
  const reset = () => {
    setImageURLs([{ url: "" }]);
  }

  return (
    <div className='edit-image-container'>
      <h1 className='header-title'>Edit Your Images</h1>
      <div className='edit-images__container'>
        {imageURLs.map((element, index) => (
          <div className='edit-image__container' key={index}>
            <figure
              className='edit__image'
              style={{ backgroundImage: `url( ${element.url} )` }}
            />
            <span
              className="material-symbols-outlined image__close"
              onClick={() => removeFormFields(index)}
            >
              close
            </span>
          </div>
        ))}
      </div>
      <div className='edit-booking-link__button-container'>
        <button
          className={imageURLs.length < 5 ? 'disabled' : 'booking-link__button btn'}
          onClick={handleSubmit}
          type='button'
          disabled={imageURLs.length < 5}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default EditImageForm;