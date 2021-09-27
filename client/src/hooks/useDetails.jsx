import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getGuitarByIdAction, getReviews, getReviewById, createReviewAction,
  deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction,
} from '../actions';

const initialState = { review: '', rating: 3 };

function useDetails() {
  const [review, setReview] = useState(initialState);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const favorites = useSelector((state) => state.favorites.allFavorites);

  const guitar = useSelector((state) => state.guitars.guitar);
  const [favId, setFavId] = useState('');
  const [user, setEmail] = useState(() => JSON.parse(localStorage.getItem('user')));

  let email = '';
  if (user) email = user.email;

  const dispatch = useDispatch();

  const handleReviewValues = (e) => {
    const { name } = e.target;
    setReview({ ...review, [name]: e.target.value });
  };

  const handleAddReview = async (e, id) => {
    e.preventDefault();
    setReview(initialState);
    const res = await dispatch(createReviewAction(id, review, token));
  };

  const handleDeleteReview = async (reviewId, id) => {
    const res = await dispatch(deleteReviewAction(reviewId, token, id));
    console.log(res);
  };

  const handleFavorite = async (id) => {
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

  return {
    handleChange,
    handleFavorite,
    handleAddReview,
    handleReviewValues,
    handleDeleteReview,
    setFavId,
    favId,
    token,
    review,
    setReview,
    user,
    setEmail,
    email,
  };
}

export default useDetails;
