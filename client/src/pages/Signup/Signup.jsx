import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction, clearErrors } from '../../actions';
import useValidation from '../../hooks/useValidation';
import Header from '../../components/header/Header';
import './Signup.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Signup({ error, setError, initial }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: '', password: '', name: '' });
  const { handleEmailValidation, handlePasswordValidation, handleNameValidation } = useValidation();

  const [authError, setAuthError] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setError(initial);

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
      history.push('/login');
    }
  };

  return (
    <div>
      <Header />
      <LoginForm>
        <form onSubmit={hendleSubmit}>
          {/* <label htmlFor="name"> */}
          {/* Nome */}
          <div className="input-box">
            <input
              type="text"
              value={state.name}
              name="name"
              required
              className={!error.name.valid ? 'email-invalid' : 'email-valid'}
              onBlur={(e) => handleNameValidation(e, error, setError)}
              onChange={handleValueInput}
              placeholder="Nome"
            />
            <p className={!error.name.valid ? 'input__error' : 'input__error__hidden'}>
              {error.name.text ? error.name.text : 'error msg'}
            </p>
          </div>
          {/* </label> */}
          {/* <label htmlFor="email">
            Email */}
          <div className="input-box">
            <input
              type="email"
              value={state.email}
              name="email"
              required
              id="email"
              className={!error.email.valid ? 'email-invalid' : 'email-valid'}
              onBlur={(e) => handleEmailValidation(e, error, setError)}
              onChange={handleValueInput}
              placeholder="Email"
            />
            <p className={!error.email.valid ? 'input__error' : 'input__error__hidden'}>
              {error.email.text ? error.email.text : 'error msg'}
            </p>
          </div>
          {/* </label> */}
          {/* <label htmlFor="password"> */}
          {/* Password */}
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={state.password}
              className={!error.password.valid ? 'pass-invalid' : 'pass-valid'}
              onBlur={(e) => handlePasswordValidation(e, error, setError)}
              onChange={handleValueInput}
              placeholder="Senha"
            />
            <p className={!error.password.valid ? 'input__error' : 'input__error__hidden'}>
              {error.password.text ? error.password.text : 'error msg'}
            </p>
          </div>

          {/* </label> */}
          <div className="login__btn">
            <button
              disabled={!error.email.valid || !error.name.valid || state.password.length < 8}
              type="submit"
            >
              Criar conta
            </button>
          </div>
        </form>
        {/* {!error.email.valid && (<span>{error.email.text}</span>)} */}
        {/* {!error.password.valid && (<span>{error.password.text}</span>)} */}
        {/* {!error.name.valid && (<span>{error.name.text}</span>)} */}
        <div className="signup">
          <p>
            Já tem uma conta?
            {' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </LoginForm>
    </div>
  );
}
