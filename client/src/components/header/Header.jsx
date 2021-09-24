import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

// const handleLogout = () => {
//   localStorage.clear();
// };

function Header() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>

      <nav className="navBarItems">
        <Link className="home-title" to="/">
          <h1 className="navbar-logo">
            <i className="fas fa-guitar" />
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
          {/* <li>
            <Link className="nav-links" to="/">Home</Link>
          </li> */}
          {!token && (
          <li>
            <Link className="nav-links" to="/login">Login</Link>
          </li>
          ) }
          <li>
            <Link onClick={handleClicked} className="nav-links" to={token ? '/config' : '/signup'}>{token ? 'Minha Conta' : 'Crie sua conta'}</Link>
          </li>
          <li>
            <Link onClick={handleClicked} className={token ? 'nav-links' : 'links-off'} to="/admin">Admin</Link>
          </li>
          <li>
            <Link onClick={handleClicked} className={token ? 'nav-links' : 'links-off'} to="/about">Sobre</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Header;
