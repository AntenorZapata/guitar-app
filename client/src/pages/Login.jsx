import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, clearErrors } from '../actions';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  // const { data } = useSelector((stateData) => stateData.user);
  const [error, setError] = useState(false);
  const token = localStorage.getItem('token');

  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(clearErrors());
  //   if (token) {
  //     history.push('/');
  //   }
  // }, []);

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginAction(state));
    if (res) {
      setError(true);
    } else {
      history.push('/');
    }
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
          Senha
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleValueInput}
          />
        </label>
        <button type="submit">Entrar</button>
        <Link to="/forgotPassword">Esqueci minha senha</Link>
        <Link to="/signup">Criar conta</Link>
      </form>
      {error && (
      <span>
        E-mail ou senha inválidos.
      </span>
      )}
    </div>
  );
}
