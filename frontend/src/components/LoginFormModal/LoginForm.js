import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import Logo from '../Logo';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-form__logo'>
        <Logo />
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input
        className='input-field login-form__input'
        type="text"
        placeholder='Email'
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
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
      <button className='btn login-form__btn' type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;