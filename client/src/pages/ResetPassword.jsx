import React, { useState, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, clearErrors, resetAction } from '../actions';
// import history from '../services/history';

// eslint-disable-next-line react/prop-types
const ResetPassword = (props) => {
  const [state, setState] = useState({ password: '' });
  // const history = useHistory();
  const dispatch = useDispatch();

  const tokenLogin = localStorage.getItem('token');

  // eslint-disable-next-line react/prop-types
  // const { match: { params: { token } } } = props;

  console.log(props);

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(resetAction(state, token));
    // eslint-disable-next-line react/prop-types
    localStorage.setItem('token', 'aaaaa');
    // eslint-disable-next-line react/prop-types
    // history.push('/');
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

export default withRouter(ResetPassword);
