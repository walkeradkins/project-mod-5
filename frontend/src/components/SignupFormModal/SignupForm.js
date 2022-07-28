import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UploadProfileImage from '../UploadProfileImage';
import './SignUp.css';
import Logo from '../Logo';


const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return (
  //   <Redirect to='/' />
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signUp({
        email,
        username,
        password,
        image
      })).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field'])
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleRemove = () => {
    setImage(null);
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-form__logo'>
        <Logo />
      </div>
      <ul>
        {errors.map((error, index) => <li key={index}>{error}</li>)}
      </ul>
      <input
        className='input-field login-form__input'
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className='input-field login-form__input'
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className='input-field login-form__input'
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        className='input-field login-form__input'
        type="password"
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div className='file__upload-container'>
        {!image && <div className='file__upload-choose'>
          <label for='file' className='file__upload-choose-text'><span>Upload Profile Image</span></label>
          <input
            id="file"
            style={{ visibility: "hidden" }}
            className='signup-form__input-file'
            type="file"
            placeholder='Image'
            onChange={updateFile}
            accept="image/*"
          />
        </div>}
        {image && <div className='file__upload-choose'>
          <label for='file' className='file__upload-choose-text'>Choose A New Image</label>
          <input
            id="file"
            style={{ visibility: "hidden" }}
            className='signup-form__input-file'
            type="file"
            placeholder='Image'
            onChange={updateFile}
            accept="image/*"
          />
        </div>}
        {image &&
          <div className='file__name-container'>
            <span className='file__name'>{image.name}
            </span>
            <span
              className="material-symbols-outlined file__trashcan"
              onClick={handleRemove}
            >
              delete
            </span>
          </div>}
      </div>
      <button className='btn login-form__btn' type="submit">Sign Up!</button>
    </form >
  )
}

export default SignupForm;