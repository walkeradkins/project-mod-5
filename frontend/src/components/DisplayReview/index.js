import './DisplayReview.css'
import TextareaAutosize from 'react-textarea-autosize';
import Avatar from '../Avatar';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { updateReview, deleteReview } from '../../store/reviews'

const DisplayReview = ({ review, index, modal, user, users, setEditedReview, setDeletedReview }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newReview, setNewReview] = useState(review.description);
  const focusRef = useRef(null)
  const [deleteModal, setDeleteModal] = useState(false)

  useEffect(() => {
    if (edit) focusRef.current.focus();
  }, [edit]);

  if (!modal) {
    if (index > 5) return
  }

  const handleSubmit = async () => {
    setNewReview(newReview.trim())
    const payload = {
      description: newReview,
    }

    let editedReview;

    try {
      editedReview = await dispatch(updateReview(payload, review.id))
    } catch (e) {
      console.log(e)
    }
    if (editedReview) {
      setEdit(false)
      setEditedReview(editedReview)
    }
  }

  const handleDelete = async () => {
    setDeleteModal(false)
    let deletedReview;
    try {
      deletedReview = await dispatch(deleteReview(review.id));
    } catch (error) {
      console.log(error);
    }
    if (deletedReview) {
      setDeletedReview(deletedReview)
    }
  };

  const { description, userId, date } = review;
  const { firstName, profileImageUrl } = users[userId];

  return (
    <div className='listing__desc-review'>
      <div className='listing__desc-review-header'>
        <div className='listing__desc-review-header-left'>
          <Avatar userImage={profileImageUrl} firstName={firstName} size={'1.25em'} />
          <div className='listing__desc-review-details-container'>
            <p className='listing__desc-review-user'>{firstName}</p>
            <p className='listing__desc-review-date'>{date}</p>
          </div>
        </div>
        {userId === user.id &&
          <div className='listing__desc-review-header-right'>
            <span
              className="material-symbols-outlined"
              onClick={() => setEdit(true)}
            >
              edit
            </span>
            <span
              className="material-symbols-outlined"
              onClick={() => setDeleteModal(true)}
            >
              delete
            </span>
            {deleteModal &&
              <Modal onClose={() => setDeleteModal(false)}>
                <div className='delete__review-container'>
                  <p className='delete__review-header'>Are you sure you want to delete this review?</p>
                  <div className='edit-button__container'>
                    <button
                      className='delete__review-btn cancel'
                      onClick={() => setDeleteModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className='delete__review-btn submit'
                      onClick={handleDelete}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </Modal>
            }
          </div>}
      </div>
      <TextareaAutosize
        className={edit ? 'listing__desc-review-desc' : 'listing__desc-review-desc-disabled'}
        value={newReview}
        disabled={!edit}
        ref={focusRef}
        onChange={(e) => setNewReview(e.target.value)}
      />
      {edit &&
        <div className='edit-button__container'>
          <button
            onClick={() => setEdit(false)}
            className='cancel'>
            Cancel
          </button>
          <button
            className='submit'
            onClick={handleSubmit}
          >Submit</button>
        </div>
      }
    </div>
  )
}

export default DisplayReview;