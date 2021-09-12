import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, clearErrors } from '../actions';
import useValidation from '../hooks/useValidation';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: '', password: '' });
  const { handleEmailValidation, handlePasswordValidation } = useValidation();

  const [error, setError] = useState({
    email: { valid: true, text: '' },
    password: { valid: true, text: '' },
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
    const res = await dispatch(loginAction(state));
    if (res) {
      setAuthError(true);
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
            onBlur={(e) => handleEmailValidation(e, error, setError)}
            value={state.email}
            name="email"
            required
            id="email"
            className={!error.email.valid ? 'email-invalid' : 'email-valid'}
            onChange={handleValueInput}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            onBlur={(e) => handlePasswordValidation(e, error, setError)}
            type="password"
            name="password"
            value={state.password}
            className={!error.password.valid ? 'pass-invalid' : 'pass-valid'}
            onChange={handleValueInput}
          />
        </label>
        <button disabled={!error.email.valid || state.password.length < 8} type="submit">Entrar</button>
        <Link to="/forgotPassword">Esqueci minha senha</Link>
        <Link to="/signup">Criar conta</Link>
      </form>
      {!error.email.valid && (<span>{error.email.text}</span>)}
      {!error.password.valid && (<span>{error.password.text}</span>)}
      {authError && <span>Email ou senha inválidos.</span>}
    </div>
  );
}
