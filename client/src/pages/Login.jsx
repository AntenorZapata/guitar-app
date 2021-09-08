import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });

  const handleValueInput = (e) => {
    e.preventDefault();
    const { name } = e.target;

    setState({ ...state, [name]: e.target.value });
  };

  const hendleSubmit = () => {
    const { email, password } = state;
  };

  return (
    <div>
      <form>
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
