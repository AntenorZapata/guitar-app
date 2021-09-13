import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function GuitarDeck() {
  const guitars = useSelector((state) => state.guitars.allGuitars);

  return (
    <div>
      {guitars && guitars.map((gt) => (
        <Link
          to={`/guitarDetails/${gt._id}`}
          key={gt._id}
          className="guitar-card-link"
        >
          <div className="guitar-card">
            <h3>{gt.brand}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
