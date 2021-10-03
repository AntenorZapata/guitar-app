import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="sideBar__container">
      <ul className="sideBar__nav">
        <li>
          <Link
            to="/config"
            className={path === '/config' ? 'link active-link' : 'link'}
          >
            Perfil
          </Link>
        </li>
        <li>
          <Link
            to="/favs"
            className={path === '/favs' ? 'link active-link' : 'link'}
          >
            Favoritos
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className={path === '/reviews' ? 'link active-link' : 'link'}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
