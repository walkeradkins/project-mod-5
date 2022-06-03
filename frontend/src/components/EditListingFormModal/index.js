import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditListingForm from '../EditListingForm';
import './EditListingFormModal.css'


function EditListingFormModal({showModal, setShowModal}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-listing-btn__modal btn' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListingForm setShowModal={setShowModal} showModal={showModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditListingFormModal;