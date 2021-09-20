import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import {
  getById, getReviews, getReviewById, createReviewAction,
  deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction,
} from '../actions';

const initialState = { review: '', rating: '1' };

function Details({ match: { params: { id } } }) {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  // User só um useSelector - refactor
  const guitar = useSelector((state) => state.guitars.guitar);
  const reviews = useSelector((state) => state.guitars.reviewById);
  const favorites = useSelector((state) => state.guitars.allFavorites);

  const [review, setReview] = useState(initialState);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getReviewById(id));
    dispatch(getFavoriteByEmailAction(email, token));
  }, []);

  const handleReviewValues = (e) => {
    const { name } = e.target;
    setReview({ ...review, [name]: e.target.value });
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    setReview(initialState);
    const res = await dispatch(createReviewAction(id, review, token));
    console.log(res);
  };

  const handleDeleteReview = async (reviewId) => {
    const res = await dispatch(deleteReviewAction(reviewId, token, id));
    console.log(res);
  };

  console.log(favorites);

  const handleFavorite = async () => {
    if (!fav) {
      await dispatch(createFavoriteAction(email, id, token));
    } else {
      // await dispatch(deleteFavoriteAction(favId, token));
    }
    setFav(!fav);
  };

  return (
    <div>
      <Header />
      <div className="details-title">
        <h1>{guitar.model}</h1>
        <MdFavorite
          onClick={handleFavorite}
          type="button"
          className={!fav ? 'heart' : 'black-heart'}
        />
      </div>
      {token && (
      <form onSubmit={handleAddReview}>
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
        <label htmlFor="rating">
          Adicione uma nota
          <select
            id="review"
            name="rating"
            value={review.rating}
            onChange={handleReviewValues}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="submit"> Adicionar</button>
      </form>
      )}
      {reviews.length ? reviews.map((revi) => (
        <div key={revi.id}>
          <p key={revi._id}>{revi.review}</p>
          {email === revi.user.email && (
          <button
            onClick={() => handleDeleteReview(revi._id)}
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
