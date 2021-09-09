import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <nav>

        <Link to={token ? '/fav' : '/login'}>{token ? 'Favoritos' : 'Login'}</Link>
        {' '}
        <Link to={token ? '/config' : '/signup'}>{token ? 'Minha Conta' : 'Crie sua conta'}</Link>

        {token
        && (
        <Link to="/">
          <button type="button" onClick={(handleLogout)}>Sair</button>
        </Link>
        )}

      </nav>
    </div>
  );
}

export default Home;
