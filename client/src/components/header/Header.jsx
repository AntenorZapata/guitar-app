import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.clear();
    setClicked(!clicked);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setClicked(false);
    });
  }, []);

  return (
    <div>

      <nav className="navBarItems">
        <Link className="home-title" to="/">
          <h1 className="navbar-logo">
            Guitar Finder
          </h1>
        </Link>
        <div
          className="menu-icon"
          onClick={handleClicked}
          role="button"
          onKeyDown={handleClicked}
          tabIndex={0}
        >
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link
              onClick={handleClicked}
              className="nav-links"
              to="/"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              onClick={handleClicked}
              to={token ? '/config' : '/login'}
            >
              {token ? 'Minha Conta' : 'Login'}
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClicked}
              className="nav-links"
              to={token ? '/about' : '/signup'}
            >
              {token ? 'Sobre' : 'Crie sua conta'}
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClicked}
              className={token ? 'nav-links' : 'links-off'}
              to="/admin"
            >
              Painel
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLogout}
              className={token ? 'nav-links' : 'links-off'}
              to="/login"
            >
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
