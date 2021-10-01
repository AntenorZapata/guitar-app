import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import './GuitarCard.css';
import { FaGuitar, FaRegCalendarCheck } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im';
// import fender from './2.jpg';

const gtImage = './2.jpg';

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
        <div>
          <div className="card">
            <div className="card__header">
              <div className="card__picture">
                <div className="card__picture-overlay">&nbsp;</div>
                <img
                  src={`./images/${guitar.imageCover}`}
                  alt="fender 1"
                  className="card__picture-img"
                />
              </div>
              <h3 className="heading-tertirary">
                <span>{`${guitar.brand} ${guitar.model}`}</span>
              </h3>
            </div>

            <div className="card__details">
              <h4 className="card__sub-heading">{guitar.tags}</h4>
              <p className="card__text">
                {guitar.summary}
              </p>
              <div className="card__data">
                <FaGuitar className="card__icon">
                  <use xlinkHref="img/icons.svg#icon-map-pin" />
                </FaGuitar>
                <span>Banff, Canada</span>
              </div>
              <div className="card__data">
                <FaRegCalendarCheck className="card__icon">
                  <use xlinkHref="img/icons.svg#icon-calendar" />
                </FaRegCalendarCheck>
                <span>
                  {`Ano: ${guitar.year}`}
                </span>
              </div>

            </div>

            <div className="card__footer">
              <p>
                <span className="card__footer-value">
                  {`R$ ${guitar.price},00`}
                </span>
                {/* <span className="card__footer-text">per person</span> */}
              </p>
              <p className="card__ratings">
                <span className="card__footer-value">{`Likes: ${guitar.likeCount}`}</span>
                {/* <span className="card__footer-text">rating (21)</span> */}
              </p>
              <Link
                to={`/guitarDetails/${guitar._id}`}
                className="btn btn--green btn--small"
              >
                Detalhes
              </Link>

            </div>
          </div>
        </div>

      )}

    </div>
  );
}

export default GuitarCard;
