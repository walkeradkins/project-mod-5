import './ReviewForm.css'
import React, { useEffect, useState } from 'react'
import { getListings } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import Rating from '../Rating';
import TextareaAutosize from 'react-textarea-autosize';
import { getHumanMonth } from '../utils';
import { createNewReview } from '../../store/reviews'

const ReviewForm = ({ homeOwner, listing, user, setReview, firstReview, setFirstReview }) => {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cleanliness, setCleanliness] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [checkin, setCheckin] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [location, setLocation] = useState(0);
  const [value, setValue] = useState(0);
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState(true);
  const [isOwner, setIsOwner] = useState(user.id === listing.userId)

  const getDate = () => {
    const date = new Date();
    const month = getHumanMonth(date.getMonth());
    const year = date.getFullYear();
    return `${month}, ${year}`
  }

  const getStarAverage = () => {
    const total = communication + cleanliness + checkin + accuracy + location + value
    const average = total / 6;
    return parseFloat(average.toFixed(2));
  }

  useEffect(() => {
    const errorsArray = [cleanliness, communication, checkin, accuracy, location, value, comments];
    setErrors(errorsArray.some(item => !item))
    return () => setErrors(true)
  })

  const handleToggle = () => {
    setShowModal(prev => !prev);
    setCleanliness(0);
    setCommunication(0);
    setCheckin(0);
    setAccuracy(0);
    setLocation(0);
    setValue(0);
    setComments('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      listingId: listing.id,
      userId: user.id,
      cleanliness,
      stars: getStarAverage(),
      date: getDate(),
      communication,
      checkin,
      accuracy,
      location,
      value,
      description: comments,
    }

    let newReview;
    try {
      newReview = await dispatch(createNewReview(payload, listing.id));
    } catch (err) {
      console.log(err);
    }
    if (newReview) {
      handleToggle();
      setUpdated(newReview);
      setReview(newReview);
    }
    setUpdated('')
    setReview('')
  }

  const handleClose = () => {
    setFirstReview(false);
    setShowModal(false);
  }

  return (
    <>
      {!isOwner && <div
        className='review__button review__button-create'
        onClick={handleToggle}
      >Leave a review for {homeOwner.firstName}</div>}
      {isOwner && <div
        className='review__button review__button-create'
        disabled
      >This is how your reviews appear</div>}
      {(showModal || firstReview) && (
        <Modal onClose={handleClose}>
          <form className='review__form' onSubmit={handleSubmit}>
            <p className='rating__header'>How was your stay?</p>
            <Rating changeState={setCleanliness} label={'cleanliness'} />
            <Rating changeState={setCommunication} label={'communication'} />
            <Rating changeState={setCheckin} label={'check-in'} />
            <Rating changeState={setAccuracy} label={'accuracy'} />
            <Rating changeState={setLocation} label={'location'} />
            <Rating changeState={setValue} label={'value'} />
            <div className='rating__textarea-container'>
              <TextareaAutosize
                className='rating__textarea'
                maxLength={500}
                placeholder='Comments'
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                minRows={5}
              />
              <p className='rating__charcount'>{`${comments.length}/500`}</p>
            </div>
            <div className='rating__button-container'>
              <button
                className='rating__button rating__button-cancel'
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className={errors ? 'rating__button rating__button-disabled' : 'rating__button rating__button-submit'} type='submit'
                disabled={errors}
              >Submit</button>
            </div>
          </form>
        </Modal>
      )}
    </>
  )
}

export default ReviewForm