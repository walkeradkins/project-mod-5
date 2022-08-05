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
  const [imageURLs, setImageURLs] = useState({});
  const [created, setCreated] = useState(false);

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === user.id;
  }));

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImageURLs(prev => ({
      ...prev,
      [Object.keys(imageURLs).length]: file
    }))
  }

  useEffect(() => {
    dispatch(getListings())
  }, [created]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const imagesArray = Object.values(imageURLs);

    const payload = {
      images: imagesArray,
      listingId: listingId
    };

    let images;
    try {
      images = await dispatch(createNewImages(payload, listingId))
    } catch (error) {
      console.log(error)
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

  const handleRemove = (ind) => {
    const newState = { ...imageURLs };
    delete newState[ind];
    setImageURLs(newState);
  }

  return (
    <>
      <p className='header-title listing-form__image-title'>Please add at least five images of your home</p>
      <form autoComplete="off" className='listing-form__image-container container'>
        <div className='file__upload-container'>
        </div>
        {Object.keys(imageURLs).length > 0 &&
          <div className='file__name-container'>
            <span className='file__name'>
              {Object.values(imageURLs).map((image, ind) =>
                <span key={ind} className='booking__file-listing'>
                  <p>{image.name}</p>
                  <span
                    className="material-symbols-outlined file__trashcan"
                    onClick={() => handleRemove(ind)}
                  >
                    delete
                  </span>
                </span>
              )}
            </span>
          </div>}
        <div className='file__upload-choose-listing'>
          <label htmlFor='file' className='file__upload-choose-text-listing'>
            <span>Upload Image</span>
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
        <div className='booking-link__button-container'>
          <button
            className={
              Object.keys(imageURLs).length > 4 ?
                'booking-link__button btn' :
                'disabled'
            }
            // disabled={Object.keys(imageURLs).length < 5}
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default ImageForm

// {imageURLs.map((element, index) => (
//   <div className='booking-link__container' key={index}>
//     <figure className='booking-link__image' style={{ backgroundImage: `url( ${element.url} )` }} />
//     <input
//       placeholder='Image URL'
//       className='booking_link__input'
//       type="text"
//       required
//       name="url"
//       value={element.url || ""}
//       onChange={e => handleChange(index, e)}
//     />
//     {index > 4 ?
//       <button type="button" className="remove-booking-link-listing__button btn" onClick={() => removeFormFields(index)}>X</button>
//       : null}
//   </div>
// ))}