import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import GuitarCard from '../components/guitarCard/GuitarCard';
import { getFavoriteByEmailAction, deleteFavoriteAction } from '../actions';
import SideBar from '../components/sideBar/SideBar';
import AccountTitle from '../components/AccountTitle/AccountTitle';

function Favorites() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  const favorites = useSelector((state) => state.favorites.allFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavoriteByEmailAction(email, token));
    }
  }, [favorites]);

  const handleDeleteFav = async (id) => {
    await dispatch(deleteFavoriteAction(id, token));
  };

  return (
    <div>
      <Header />
      <section className="main__container">
        {/* <AccountTitle title="Favoritos" /> */}
        <SideBar />
        {favorites.length ? favorites.map((gt) => (
          <GuitarCard guitar={gt} favorite key={gt.guitar} handleDeleteFav={handleDeleteFav} />
        )) : 'Você não tem favoritos'}
      </section>
    </div>
  );
}

export default Favorites;
