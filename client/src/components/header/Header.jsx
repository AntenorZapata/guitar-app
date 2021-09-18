import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const handleLogout = () => {
  localStorage.clear();
};

function Header() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to={token ? '/favs' : '/login'}>{token ? 'Favoritos' : 'Login'}</Link>
        <Link to={token ? '/config' : '/signup'}>{token ? 'Minha Conta' : 'Crie sua conta'}</Link>
        <Link to="/admin">{token ? 'Admin' : null}</Link>
        <Link to="/about">{token ? 'Sobre' : null}</Link>
        {token
        && (
          <span>
            <p>
              Olá,
              {user.name && ` ${user.name.charAt(0).toUpperCase()}${user.name.slice(1)}`}
            </p>
            <Link to="/">
              <button type="button" onClick={handleLogout}>Sair</button>
            </Link>
          </span>
        )}
      </nav>
    </div>
  );
}

export default Header;
