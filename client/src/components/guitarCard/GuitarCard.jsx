import React from 'react';
import { Link } from 'react-router-dom';

function GuitarCard({ guitar, favorite }) {
  return (
    <div>

      {favorite ? (
        <div className="favorite-card">
          <p>{guitar.brand}</p>
          <p>{guitar.model}</p>
          <p>{guitar.year}</p>
        </div>
      ) : (
        <Link
          to={`/guitarDetails/${guitar._id}`}
          className="guitar-card-link"
        >
          <div className="guitar-card">
            <h3>{guitar.brand}</h3>
          </div>
        </Link>
      )}
    </div>
  );
}

export default GuitarCard;
