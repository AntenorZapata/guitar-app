import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction, clearErrors } from '../actions';

export default function Signup() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { data } = useSelector((stateData) => stateData.user);
  const [error, setError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(clearErrors());
  // }, []);

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signupAction(state));

    if (res) {
      setError(true);
    } else {
      history.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            value={state.name}
            name="name"
            required
            id="name"
            onChange={handleValueInput}
          />
        </label>
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
            type="password"
            name="password"
            value={state.password}
            onChange={handleValueInput}
          />
        </label>
        <button type="submit">Criar conta</button>

      </form>
      {error && (
      <span>
        Email já está em uso.
      </span>
      )}
    </div>
  );
}
