import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction, clearErrors } from '../actions';
import useValidation from '../hooks/useValidation';

export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: '', password: '', name: '' });
  const { handleEmailValidation, handlePasswordValidation, handleNameValidation } = useValidation();

  const [error, setError] = useState({
    email: { valid: true, text: '' },
    password: { valid: true, text: '' },
    name: { valid: true, text: '' },
  });
  const [authError, setAuthError] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, []);

  const handleValueInput = (e) => {
    e.preventDefault();
    setAuthError(false);
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signupAction(state));
    if (res) {
      setAuthError(true);
    } else {
      history.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            value={state.name}
            name="name"
            required
            id="name"
            className={!error.name.valid ? 'name-invalid' : 'name-valid'}
            onBlur={(e) => handleNameValidation(e, error, setError)}
            onChange={handleValueInput}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={state.email}
            name="email"
            required
            id="email"
            className={!error.email.valid ? 'email-invalid' : 'email-valid'}
            onBlur={(e) => handleEmailValidation(e, error, setError)}
            onChange={handleValueInput}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            className={!error.password.valid ? 'pass-invalid' : 'pass-valid'}
            onBlur={(e) => handlePasswordValidation(e, error, setError)}
            onChange={handleValueInput}
          />
        </label>
        <button
          disabled={!error.email.valid || !error.name.valid || state.password.length < 8}
          type="submit"
        >
          Criar conta
        </button>
      </form>
      {!error.email.valid && (<span>{error.email.text}</span>)}
      {!error.password.valid && (<span>{error.password.text}</span>)}
      {!error.name.valid && (<span>{error.name.text}</span>)}
      <p>
        Já tem uma conta?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
