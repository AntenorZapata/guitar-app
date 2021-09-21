import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

function GuitarCard({ guitar, favorite, handleDeleteFav }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token') || '';

  return (
    <div>
      {favorite ? (
        <div className="favorite-card">
          <MdFavorite onClick={() => handleDeleteFav(guitar._id)} />
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
