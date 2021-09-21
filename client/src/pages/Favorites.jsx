import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import GuitarCard from '../components/guitarCard/GuitarCard';
import {
  getGuitarByIdAction, getReviews, getReviewById, createReviewAction,
  deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction, getGuitars,
} from '../actions';
import { getGuitarById } from '../api';

function Favorites() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  const favorites = useSelector((state) => state.favorites.allFavorites);
  const guitars = useSelector((state) => state.guitars.allGuitars);
  const favoritesPage = useSelector((state) => state.favorites.favoritesPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavoriteByEmailAction(email, token));
      // dispatch(getGuitars());
    }
  }, []);

  // useEffect(() => {
  //   // eslint-disable-next-line array-callback-return
  //   favorites.map((el) => {
  //     // dispatch(setFavoritesPage(el.guitar));
  //   });
  // }, [favorites]);

  console.log(favorites);
  console.log(guitars);

  return (
    <div>
      <Header />
      <h1>favorite</h1>
      {
        favoritesPage.length && favoritesPage.map((el) => <h1>{el.brand}</h1>)
      }
      {/* {guitars.length && guitars.map((el, index) => {
        const fav = favorites[index];
        console.log(fav);

        return (
          <div key={el._id}>{el._id === fav.guitar && <GuitarCard guitar={el} />}</div>
        );
      })} */}
    </div>
  );
}

export default Favorites;
