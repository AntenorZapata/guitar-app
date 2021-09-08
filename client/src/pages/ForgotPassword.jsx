import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, forgotAction } from '../actions';

export default function ForgotPassword() {
  const [state, setState] = useState({ email: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    const { email } = state;

    dispatch(forgotAction(email));

    toast.success('Senha enviada para email cadastrado!');

    history.push('/');
  };

  return (
    <div>
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
      <ToastContainer autoClose={2500} position="top-center" />
    </div>
  );
}
