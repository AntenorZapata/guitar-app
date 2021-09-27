import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction, clearErrors, resetAction } from '../actions';
import useValidation from '../hooks/useValidation';

const ResetPassword = (props) => {
  const [state, setState] = useState({ password: '' });
  const dispatch = useDispatch();
  const { handlePasswordValidation } = useValidation();

  const {
    match: { params: { token } }, error, setError, initial,
  } = props;

  useEffect(() => {
    setError(initial);
  }, []);

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(resetAction(state, token));
    props.history.push('/login');
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="password">
          Nova senha
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleValueInput}
            onBlur={(e) => handlePasswordValidation(e, error, setError)}
            className={!error.password.valid ? 'pass-invalid' : 'pass-valid'}
          />
        </label>
        <button disabled={state.password < 8} type="submit">Entrar</button>
      </form>
      {!error.password.valid && (<span>{error.password.text}</span>)}
    </div>
  );
};

ResetPassword.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResetPassword;
