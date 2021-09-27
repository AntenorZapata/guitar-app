import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, forgotAction, clearErrors } from '../actions';
import useValidation from '../hooks/useValidation';

const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword/';

export default function ForgotPassword({ error, setError }) {
  const [state, setState] = useState({ email: '' });
  const { forgotPassword } = useSelector((err) => err.errors);
  const { handleEmailValidation } = useValidation();

  const dispatch = useDispatch();

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(forgotAction(state));
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
            className={!error.email.valid ? 'email-invalid' : 'email-valid'}
            onBlur={(e) => handleEmailValidation(e, error, setError)}
            required
          />
        </label>
        <button type="submit">Redefinir Minha senha</button>
      </form>
      {forgotPassword && (
      <div>
        <p>
          Não existe cadastro com o e-mail informado.
        </p>
        <Link to="/signup">Criar conta</Link>
      </div>
      )}
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}
