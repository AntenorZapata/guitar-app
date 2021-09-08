import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction, clearErrors } from '../actions';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginAction(state));

    history.push('/');
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={state.email}
            name="email"
            required
            id="email"
            onChange={handleValueInput}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleValueInput}
          />
        </label>
        <button type="submit">Entrar</button>
        <Link to="/forgotPassword">Esqueci minha senha</Link>
      </form>
    </div>
  );
}
