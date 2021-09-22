import { Link, useLocation } from 'react-router-dom';

import React from 'react';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/config"
            className={path === '/config' ? 'link-red' : ''}
          >
            meus dados
          </Link>
        </li>
        <li>
          <Link
            to="/favs"
            className={path === '/favs' ? 'link-red' : ''}
          >
            favoritos
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className={path === '/reviews' ? 'link-red' : ''}
          >
            reviews
          </Link>
        </li>
        <li>
          <Link
            to="/userdata"
            className={path === '/logout' ? 'link-red' : ''}
          >
            sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
