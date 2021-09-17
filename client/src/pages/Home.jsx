import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GuitarDeck from '../components/guitarDeck/GuitarDeck';
import { getGuitars, clearGuitar } from '../actions';

function Home() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const guitars = useSelector((state) => state.guitars.result);

  useEffect(() => {
    dispatch(clearGuitar());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };
  // criar component header
  return (
    <div>
      <nav>
        <Link to={token ? '/favs' : '/login'}>{token ? 'Favoritos' : 'Login'}</Link>
        <Link to={token ? '/config' : '/signup'}>{token ? 'Minha Conta' : 'Crie sua conta'}</Link>
        {token
        && (
        <Link to="/">
          <button type="button" onClick={handleLogout}>Sair</button>
        </Link>
        )}
      </nav>
      <GuitarDeck />
    </div>
  );
}

export default Home;
