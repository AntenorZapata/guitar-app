import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, forgotAction, clearErrors } from '../actions';
import useValidation from '../hooks/useValidation';
import LoginForm from '../components/LoginForm/LoginForm';

const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword/';

export default function ForgotPassword({ error, setError, initial }) {
  const [state, setState] = useState({ email: '' });
  const { forgotPassword } = useSelector((err) => err.errors);
  const { handleEmailValidation } = useValidation();

  useEffect(() => {
    setError(initial);
  }, []);

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
      <LoginForm>
        <form onSubmit={hendleSubmit}>
          {/* <label htmlFor="email">
            Email */}
          <div className="input-box">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleValueInput}
              className={forgotPassword ? 'email-invalid' : 'email-valid'}
              onBlur={(e) => handleEmailValidation(e, error, setError)}
              required
            />
            <div>
              <p className={forgotPassword ? 'input__error' : 'input__error__hidden'}>
                {forgotPassword ? 'Não existe cadastro com o e-mail informado.' : 'error msg'}
                <Link to="/signup">Criar conta</Link>
              </p>
            </div>
          </div>

          {/* </label> */}
          <div className="login__btn">
            <button type="submit">Redefinir Minha senha</button>
          </div>
        </form>

        <ToastContainer autoClose={2000} position="top-center" />
      </LoginForm>
    </div>
  );
}
