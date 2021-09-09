import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction, clearErrors, resetAction } from '../actions';

const ResetPassword = (props) => {
  const [state, setState] = useState({ password: '' });
  const dispatch = useDispatch();

  const { match: { params: { token } } } = props;

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(resetAction(state, token));
    props.history.push('/');
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleValueInput}
          />
        </label>
        <button type="submit">Entrar</button>
        {/* <Link to="/forgotPassword">Esqueci minha senha</Link>
        <Link to="/signup">Criar conta</Link> */}
      </form>
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
