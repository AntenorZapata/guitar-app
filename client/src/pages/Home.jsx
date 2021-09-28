import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const initialState = {
  filter: '', search: '', min: '', max: '',
};

function Home() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const guitars = useSelector((gtState) => gtState.guitars.allGuitars);
  const [guitarFiltered, setGuitarFiltered] = useState([]);
  const { filterGuitars } = useFilters();
  const { handleTopGuitars } = useTopGuitars();

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

  useEffect(() => {
    dispatch(clearGuitar());
    dispatch(clearReviews());
    dispatch(clearFavorites());
    setGuitarFiltered(guitars);
  }, [guitars]);

  return (
    <div>
      <Header />
      <main className="main__container">
        <div className="filters-container">
          {token
        && (
        <HomeFilters
          handleClearFilters={handleClearFilters}
          handleValue={handleValue}
          state={state}
          handleTopGuitars={handleTopGuitars}
        />
        )}
        </div>
        <div className="guitar-deck-container">
          <GuitarDeck guitars={paginate(guitarFiltered, 9)} />
        </div>
      </main>

    </div>
  );
}

export default Home;
