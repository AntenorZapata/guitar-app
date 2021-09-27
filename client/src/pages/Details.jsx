import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import {
  getGuitarByIdAction, getReviews, getReviewById, createReviewAction,
  deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction,
} from '../actions';
import StarRating from '../components/starRating/StarRating';
import '../components/starRating/starRating.css';
import useDetails from '../hooks/useDetails';

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const favorites = useSelector((state) => state.favorites.allFavorites);
  const reviews = useSelector((state) => state.reviews.reviewById);
  const {
    handleChange, handleFavorite, handleAddReview, handleReviewValues, handleDeleteReview,
    setFavId, favId, token, review, email,
  } = useDetails();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGuitarByIdAction(id));
    dispatch(getReviewById(id, token));
    if (token) dispatch(getFavoriteByEmailAction(email, token));
  }, []);

  useEffect(() => {
    if (token) favorites.map((el) => el.guitar === id && setFavId(el._id));
  }, [favorites]);

  return (
    <div>
      <Header />
      <div className="details-title">
        <h1>{guitar.model}</h1>
        <MdFavorite
          onClick={() => handleFavorite(id)}
          type="button"
          className={favId ? 'black-heart' : 'heart'}
        />
      </div>
      {token && (
        <section>
          <StarRating
            count={5}
            starValue={review.rating}
            activeColor="f00"
            inactiveColor="#ddd"
            onChange={handleChange}
            bool
          />
          <form onSubmit={(e) => handleAddReview(e, id)}>
            <label htmlFor="review">
              Adicione um Review
              <input
                type="text"
                id="review"
                name="review"
                value={review.review}
                required
                onChange={handleReviewValues}
              />
            </label>
            <button type="submit"> Adicionar</button>
          </form>
        </section>
      )}
      {reviews.length ? reviews.map((revi) => (
        <div key={revi.id}>
          <p key={revi._id}>{revi.review}</p>
          <StarRating
            className="show-rating"
            starValue={revi.rating}
          />
          {email === revi.user.email && (
          <button
            onClick={() => handleDeleteReview(revi._id, id)}
            type="button"
          >
            deletar
          </button>
          )}
        </div>
      )) : null}
    </div>
  );
}

export default Details;
