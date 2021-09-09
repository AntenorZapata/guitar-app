import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, forgotAction, clearErrors } from '../actions';

const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword/';

export default function ForgotPassword() {
  const [state, setState] = useState({ email: '' });
  // const [error, setError] = useState(false);
  const { forgotPassword } = useSelector((err) => err.errors);
  // const user = useSelector((data) => data.user);
  // const history = useHistory();

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
      {forgotPassword && (
      <div>
        <p>
          Não existe cadastro com o e-mail informado.
        </p>
        <Link to="/signup">Crie sua conta.</Link>
      </div>
      )}
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
