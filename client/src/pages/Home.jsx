import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GuitarDeck from '../components/guitarDeck/GuitarDeck';
import {
  getGuitars, clearGuitar, clearReviews, clearFavorites,
} from '../actions';
import Header from '../components/header/Header';
import HomeFilters from '../components/homeFilters/HomeFilters';

const initialState = {
  filter: '', search: '', min: 0, max: 0,
};

function Home() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const guitars = useSelector((gtState) => gtState.guitars.allGuitars);
  const [guitarFiltered, setGuitarFiltered] = useState([]);

  const handleValue = ({ target }) => {
    const names = ['min', 'max'];
    const { name } = target;
    const value = target.type === 'radio' ? target.id : target.value;
    // const value = target.type !== 'radio' && target.value;
    setState({ ...state, [name]: value });

    if (value !== '' && target.type !== 'radio') {
      const results = (guitarFiltered.length ? guitarFiltered : guitars).filter((gt) => {
        if (name === 'min') {
          return gt.price >= +value;
        }
        if (name === 'max') {
          return state.min ? gt.price > +state.min && gt.price <= +value : gt.price <= +value;
        }

        if (state.filter && !names.includes(name)) {
          return gt[state.filter].toLowerCase().startsWith(value.toLowerCase());
        }
        return guitarFiltered;
      });
      setGuitarFiltered(results);
    } else {
      setGuitarFiltered(guitars);
    }
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
      <section className="main__container">
        <GuitarDeck guitars={guitarFiltered} />
        {token
        && (
        <HomeFilters
          handleClearFilters={handleClearFilters}
          handleValue={handleValue}
          state={state}
        />
        )}

      </section>

    </div>
  );
}

export default Home;
