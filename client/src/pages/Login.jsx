import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });

  const hendleSubmit = () => {

  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input type="email" required id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" />
        </label>
        <button type="submit">Entrar</button>
        {/* <Link to="/forgotPassword">Esqueci minha senha</Link> */}
      </form>
    </div>
  );
}
