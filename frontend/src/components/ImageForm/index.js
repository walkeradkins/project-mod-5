import './ImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'

const ImageForm = ({ listingId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [imageURLs, setImageURLs] = useState([{ url: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...imageURLs];
    newFormValues[i][e.target.name] = e.target.value;
    setImageURLs(newFormValues);
  }

  let addFormFields = () => {
    setImageURLs([...imageURLs, { url: "" }])
  }

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
       reset();
       history.push(`/listings/${listingId}`)
     }
  }

  const reset = () => {
    setImageURLs([{ url: "" }]);
  }

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      {imageURLs.map((element, index) => (
        <div key={index}>
          <input
            placeholder='Image URL'
            type="text"
            name="url"
            value={element.url || ""}
            onChange={e => handleChange(index, e)}
          />
        </div>
      ))}
      <div>
        <button type="button" onClick={() => addFormFields()}>Add Another Photo</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ImageForm