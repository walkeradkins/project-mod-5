import { ValidationError } from "../utils/validationError"
import { csrfFetch } from './csrf'

export const CREATE_IMAGES = 'images/CREATE_IMAGES';
export const CREATE_ONE = 'images/CREATE_ONE';
export const EDIT_IMAGES = 'images/EDIT_IMAGES';
export const DELETE_IMAGE = 'images/DELETE_IMAGES';

export const createImages = newImages => ({
  type: CREATE_IMAGES,
  newImages
});

export const editedImages = updatedImages => ({
  type: EDIT_IMAGES,
  updatedImages
});

export const createOne = image => ({
  type: CREATE_ONE,
  image
});

export const deleteOne = deletedImage => ({
  type: DELETE_IMAGE,
  deletedImage
});

// send one image
export const uploadOneImage = (payload, id) => async dispatch => {
  const { image } = payload
  const formData = new FormData();

  formData.append("image", image);

  const res = await csrfFetch(`/api/listings/${id}/image`, {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });

  const data = await res.json();
  dispatch(createOne(data));
  return data;
}


export const createNewImages = (payload, id) => async dispatch => {
  const { images } = payload
  const formData = new FormData();

  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  try {
    const response = await csrfFetch(`/api/listings/${id}/images`, {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData
    });

    if (!response.ok) {
      let error;
      if (response.status === 422) {
        error = await response.json();
        throw new ValidationError(error.errors, response.statusText);
      } else {
        let errorJSON;
        error = await response.text();
        try {
          errorJSON = JSON.parse(error);
        } catch {
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
      }
    }
    const images = await response.json();
    dispatch(createImages(images));
    return images;
  } catch (error) {
    throw error;
  }
}

export const editImages = (payload, id) => async dispatch => {
  const response = await csrfFetch(`/api/listings/${id}/images`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updatedImages = await response.json();
    dispatch(editedImages(updatedImages));
    return updatedImages
  }
}

export const deleteImage = (id) => async dispatch => {
  const response = await csrfFetch(`/api/images/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const deletedImage = await response.json();
    dispatch(deleteOne(deletedImage));
    return deletedImage;
  }
}

const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_IMAGES:
      const allImages = {}
      action.newImages.forEach(newImage => {
        allImages[newImage.id] = newImage;
      });
      return {
        ...allImages,
        ...state
      };
    case EDIT_IMAGES:
      const editedImages = {}
      action.updatedImages.forEach(updatedImage => {
        editedImages[updatedImage.id] = updatedImage
      });
      return {
        ...editedImages,
        ...state
      };
    case CREATE_ONE:
      if (!state[action.image.id]) {
        const newState = {
          ...state,
          [action.image.id]: action.image
        }
        return newState;
      };
    case DELETE_IMAGE:
      const newState = { ...state };
      delete newState[action.deletedImage.id];
      return newState;
    default:
      return state;
  }
}

export default imagesReducer