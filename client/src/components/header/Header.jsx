import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const handleLogout = () => {
//   localStorage.clear();
// };

function Header() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!token && (
          <li>
            <Link to="/login">Login</Link>
          </li>
          ) }
          <li>
            <Link to={token ? '/config' : '/signup'}>{token ? 'Minha Conta' : 'Crie sua conta'}</Link>
          </li>
          <li>
            <Link to="/admin">{token ? 'Admin' : null}</Link>
          </li>
          <li>
            <Link to="/about">{token ? 'Sobre' : null}</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Header;
