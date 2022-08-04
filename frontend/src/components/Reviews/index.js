import './Reviews.css';
import Avatar from '../Avatar';
import ReviewForm from '../ReviewForm';
import ReviewStats from '../ReviewStats';
import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DisplayReview from '../DisplayReview';

const Reviews = ({ props }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedReview, setEditedReview] = useState('');
  const [deletedReview, setDeletedReview] = useState('');

  const {
    users,
    selectedListing,
    homeOwner,
    user,
    setReview,
    newReviews,
    rating,
    firstReview,
    setFirstReview,
    reviewModal,
    setReviewModal,
  } = props

  if (!Object.keys(users).length) return null

  const { Reviews } = selectedListing
  let reviews = Reviews;
  let currentReviews = []

  const reviewsObj = {};

  // push previous reviews to reviewsObj (not edited or deleted)
  reviews.forEach(review => {
    reviewsObj[review.id] = review
  })

  if (deletedReview) {
    delete reviewsObj[deletedReview];
    if (newReviews[deletedReview]) delete newReviews[deletedReview];
  }

  if (editedReview) {
    reviewsObj[editedReview.id] = editedReview;
  }

  for (let i in reviewsObj) {
    currentReviews.push(reviewsObj[i])
  }

  if (Object.keys(newReviews).length) {
    for (let i in newReviews) {
      if (!reviewsObj[i]) {
        currentReviews.push(newReviews[i])
      }
    }
  }

  console.log('current reviews ', currentReviews)
  const handleClose = () => {
    setShowModal(false);
    setReviewModal(false);
  }

  return (
    <>
      {selectedListing.Reviews.length > 0 &&
        <span className='reviews__header'>
          <p className="material-symbols-outlined">star</p>
          <p>{rating}</p>
          <p>&#8226;</p>
          <p>{rating ? `${currentReviews.length} ${currentReviews.length > 1 ? 'reviews' : 'review'}` : null}</p>
        </span>}
      {selectedListing.Reviews.length > 0 && <ReviewStats listing={selectedListing} modal={false} />}
      <div className='listing__desc-reviews-container'>
        {currentReviews.map((review, index) =>
          <DisplayReview
            key={review.id}
            review={review}
            index={index}
            modal={false}
            users={users}
            user={user}
            setEditedReview={setEditedReview}
            setDeletedReview={setDeletedReview}
          />
        )}
      </div>
      <div className='listing__desc-reviews-button-container'>
        {currentReviews.length > 6 &&
          <div
            className='review__button review__button-showall'
            onClick={() => setShowModal(true)}
          >Show all {currentReviews.length} reviews</div>
        }
        {showModal || reviewModal &&
          <Modal onClose={handleClose}>
            <div className='reviews-modal__container'>
              <div className='reviews-modal__header'>
                <span
                  className="material-symbols-outlined reviews__close"
                  onClick={handleClose}
                >
                  close
                </span>
              </div>
              <div className='reviews-modal__grid'>
                <div className='reviews-modal__ratings-container'>
                  <span className='reviews__header' style={{ fontSize: '2em', padding: '.5em 0' }}>
                    <p className="material-symbols-outlined" style={{ fontSize: '1.25em' }}>star</p>
                    <p>{rating}</p>
                    <p>&#8226;</p>
                    <p>{rating ? `${currentReviews.length} ${currentReviews.length > 1 ? 'reviews' : 'review'}` : null}</p>
                  </span>
                  <div className='reviews-modal__ratings-container'>
                    <ReviewStats listing={selectedListing} modal={true} />
                  </div>
                </div>
                <div className='reviews-modal__reviews'>
                  {currentReviews.map((review, index) =>
                    <DisplayReview
                      key={review.id}
                      review={review}
                      index={index}
                      modal={false}
                      users={users}
                      user={user}
                      setEditedReview={setEditedReview}
                      setDeletedReview={setDeletedReview}
                    />
                  )}
                </div>
              </div>
            </div>
          </Modal>
        }
        <ReviewForm
          homeOwner={homeOwner}
          listing={selectedListing}
          user={user}
          setReview={setReview}
          firstReview={firstReview}
          setFirstReview={setFirstReview}
          setDeletedReview={setDeletedReview}
        />
      </div>
      <div className='listing__desc-underline' />
    </>
  );
}

export default Reviews;