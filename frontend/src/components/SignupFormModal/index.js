import SignupForm from './SignupForm';
import React, { useState } from 'react'
import { Modal } from '../../context/Modal';

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(prev => !prev);
  }
  return (
    <>
      <button className='navbar__signup'onClick={handleToggle}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal