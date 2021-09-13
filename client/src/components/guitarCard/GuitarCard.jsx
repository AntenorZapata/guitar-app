import React from 'react';
import { Link } from 'react-router-dom';

function GuitarCard({ guitar }) {
  return (
    <div>
      <Link
        to={`/guitarDetails/${guitar._id}`}
        key={guitar._id}
        className="guitar-card-link"
      >
        <div className="guitar-card">
          <h3>{guitar.brand}</h3>
        </div>
      </Link>
    </div>
  );
}

export default GuitarCard;
