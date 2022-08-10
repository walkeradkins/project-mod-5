import './EditImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings } from '../../store/listings';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { editImages, createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'
import { uploadOneImage, deleteImage } from '../../store/images'

const EditImageForm = ({ listing, setShowEditModal }) => {
  const sessionUser = useSelector(state => state.session.user);
  const { id, Images } = listing
  const [updated, setUpdated] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [imageURLs, setImageURLs] = useState([...Images])
  const [deletedImages, setDeletedImages] = useState([])
  const updatedImages = useSelector(state => state.images)
  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === sessionUser.id;
  }));

  useEffect(() => {
    dispatch(getListings())

  }, [updated]);

  let handleChange = async (e) => {
    const payload = {
      image: e.target.files[0],
      listingId: listing.id
    }
    let newImage;
    try {
      newImage = await dispatch(uploadOneImage(payload, listing.id));
    } catch (e) {
      console.log(e)
    }

    let newFormValues = [...imageURLs, ...Object.values(updatedImages)];
    setImageURLs(newFormValues);
  }

  const removeFormFields = async (e, i) => {
    let newFormValues = [...imageURLs];
    const { id } = newFormValues[i]
    const deletedImagesCopy = [...deletedImages]
    deletedImagesCopy.push(id)
    setDeletedImages(deletedImagesCopy);
    newFormValues.splice(i, 1);
    setImageURLs(newFormValues)
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

   for await (let id of deletedImages) {
     await dispatch(deleteImage(id));
   }
    setUpdated(true)
    history.push(`/users/${sessionUser.id}/listings`)
    setShowEditModal(false)
    reset()
  }

  const reset = () => {
    setImageURLs([...Images]);
    setDeletedImages([])
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
              onClick={(e) => removeFormFields(e, index)}
            >
              close
            </span>
          </div>
        ))}
      </div>
      <div className='file__upload-choose-listing'>
        <label htmlFor='file' className='file__upload-choose-text-listing'>
          <span>Upload New Image</span>
        </label>
        <input
          id="file"
          style={{ visibility: "hidden" }}
          className='signup-form__input-file-listing'
          type="file"
          placeholder='Image'
          onChange={(e) => handleChange(e)}
          accept="image/*"
        />
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