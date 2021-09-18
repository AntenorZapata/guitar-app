import React from 'react';
import { Link } from 'react-router-dom';

const handleLogout = () => {
  localStorage.clear();
};

function Header() {
  const token = localStorage.getItem('token');

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
        <Link to="/">
          <button type="button" onClick={handleLogout}>Sair</button>
        </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
