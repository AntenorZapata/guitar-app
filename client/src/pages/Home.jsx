import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchCircleSharp } from 'react-icons/io5';
import paginate from '../utils/paginate';
import GuitarDeck from '../components/guitarDeck/GuitarDeck';
import {
  getGuitars, clearGuitar, clearReviews, clearFavorites, getCheapGuitarsAction,
  getRareGuitarsAction, getTopFendersAction,
} from '../actions';
import Header from '../components/header/Header';
import HomeFilters from '../components/homeFilters/HomeFilters';
import useFilters from '../hooks/useFilters';
import useTopGuitars from '../hooks/useTopGuitars';
import './Home.css';
import Footer from '../components/Footer/Footer';
import BtnsPage from '../components/BtnsPage/BtnsPage';

const initialState = {
  filter: '', search: '', min: '', max: '',
};

function Home() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [showFilters, setShowFilters] = useState(false);
  const guitars = useSelector((gtState) => gtState.guitars.allGuitars);
  const [guitarFiltered, setGuitarFiltered] = useState([]);
  const { filterGuitars } = useFilters();
  const { handleTopGuitars } = useTopGuitars();
  const filtersRef = useRef();
  const [page, setPage] = useState(0);

  const handleValue = (e) => {
    const fns = {
      state, setState, guitarFiltered, setGuitarFiltered, guitars,
    };
    filterGuitars(e, fns);
  };

  const handleClearFilters = () => {
    setState({
      ...state, search: '', min: '', max: '',
    });
    setGuitarFiltered(guitars);
  };

  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };

  useEffect(() => {
    let isSubscribed = true;
    dispatch(clearGuitar());
    dispatch(clearReviews());
    dispatch(clearFavorites());
    setGuitarFiltered(guitars);

    isSubscribed = false;
    return () => isSubscribed;
  }, [guitars]);

  const handleBtnPage = (index) => {
    setPage(index);
  };

  return (

    <div>
      <Header />
      <main
        className={showFilters
          ? 'main__container main__container-margin'
          : 'main__container'}
      >
        {token
          ? (
            <IoSearchCircleSharp
              onClick={handleShowFilters}
              className={!showFilters ? 'show__filters' : 'show__filters active'}
            />
          ) : <div className="overflow__content" />}
        {showFilters
        && (
        <div className="filters-container">
          <HomeFilters
            handleClearFilters={handleClearFilters}
            handleValue={handleValue}
            state={state}
            handleTopGuitars={handleTopGuitars}
          />
        </div>
        )}

        <div className="guitar-deck-container">
          <GuitarDeck guitars={paginate(guitarFiltered, 6)} token={token} />
          <div className="overflow__content-home" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
