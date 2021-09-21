import React, { useState, useEffect } from 'react';
// import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import GuitarCard from '../components/guitarCard/GuitarCard';
import {
  // getGuitarByIdAction, getReviews, getReviewById, createReviewAction,
  // deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction, deleteFavoriteAction,
} from '../actions';
// import { getGuitarById } from '../api';

function Favorites() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  const favorites = useSelector((state) => state.favorites.allFavorites);
  // const guitars = useSelector((state) => state.guitars.allGuitars);
  // const favoritesPage = useSelector((state) => state.favorites.favoritesPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavoriteByEmailAction(email, token));
    }
  }, [favorites]);

  const handleDeleteFav = async (id) => {
    await dispatch(deleteFavoriteAction(id, token));
  };

  console.log('de novo');

  return (
    <div>
      <Header />
      <h1>favorite</h1>
      {favorites.length ? favorites.map((gt) => (
        <GuitarCard guitar={gt} favorite key={gt.guitar} handleDeleteFav={handleDeleteFav} />
      )) : null}
    </div>
  );
}

export default Favorites;
