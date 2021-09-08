import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, forgotAction } from '../actions';

export default function ForgotPassword() {
  const [state, setState] = useState({ email: '' });
  const [error, setError] = useState(false);
  const { resetPassword } = useSelector((err) => err.errors);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotAction(state));
  };

  const renderError = () => <span>{resetPassword}</span>;

  return (
    <div>
      {resetPassword && renderError()}
      <form onSubmit={hendleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleValueInput}
            required
          />
        </label>
        <button type="submit">Redefinir Minha senha</button>
      </form>
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}
