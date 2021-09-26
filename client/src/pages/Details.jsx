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

const initialState = { review: '', rating: 3 };

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const favorites = useSelector((state) => state.favorites.allFavorites);
  const reviews = useSelector((state) => state.reviews.reviewById);

  const [review, setReview] = useState(initialState);
  const [favId, setFavId] = useState('');
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setEmail] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [rating, setRating] = useState(3);

  let email = '';
  if (user) email = user.email;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGuitarByIdAction(id));
    dispatch(getReviewById(id, token));
    if (token) dispatch(getFavoriteByEmailAction(email, token));
  }, []);

  useEffect(() => {
    if (token) favorites.map((el) => el.guitar === id && setFavId(el._id));
  }, [favorites]);

  const handleReviewValues = (e) => {
    const { name } = e.target;
    setReview({ ...review, [name]: e.target.value });
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    setReview(initialState);
    const res = await dispatch(createReviewAction(id, review, token));
  };

  const handleDeleteReview = async (reviewId) => {
    const res = await dispatch(deleteReviewAction(reviewId, token, id));
    console.log(res);
  };

  const handleFavorite = async () => {
    const {
      brand, model, year, imageCover,
    } = guitar;
    const fav = {
      guitar: id, brand, model, year, imageCover, user: email,
    };

    if (!favId) {
      await dispatch(createFavoriteAction(fav, token));
    } else {
      await dispatch(deleteFavoriteAction(favId, token));
    }
    setFavId('');
  };

  const handleChange = (ratingValue) => {
    setReview({ ...review, rating: ratingValue });
  };

  return (
    <div>
      <Header />
      <div className="details-title">
        <h1>{guitar.model}</h1>
        <MdFavorite
          onClick={handleFavorite}
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
            {/* <label htmlFor="rating">
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
        </label> */}
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
