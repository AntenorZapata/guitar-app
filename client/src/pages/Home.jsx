import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GuitarDeck from '../components/guitarDeck/GuitarDeck';
import { getGuitars, clearGuitar } from '../actions';
import Header from '../components/header/Header';

function Home() {
  const dispatch = useDispatch();
  const guitars = useSelector((state) => state.guitars.result);

  useEffect(() => {
    dispatch(clearGuitar());
  }, []);

  return (
    <div>
      <Header />
      <GuitarDeck />
    </div>
  );
}

export default Home;
