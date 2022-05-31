import './EditImageForm.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as data from '../../data'
import { ValidationError } from '../../utils/validationError';
import { editImages, createNewImages } from '../../store/images'
import ErrorMessage from '../ErrorMessage/'


const EditImageForm = ({ listing }) => {
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
      history.push(`/listings/${id}`)
    }
  }
  const reset = () => {
    setImageURLs([{ url: "" }]);
}

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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

export default EditImageForm;