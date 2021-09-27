import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getGuitars, clearGuitar, clearReviews, clearFavorites, getCheapGuitarsAction,
  getRareGuitarsAction, getTopFendersAction,
} from '../actions';

function useTopGuitars() {
  const dispatch = useDispatch();

  const handleTopGuitars = async (e) => {
    const { value } = e.target;
    if (value === 'cheap') {
      dispatch(getCheapGuitarsAction());
    } else if (value === 'rare') {
      dispatch(getRareGuitarsAction());
    } else if (value === 'fender') {
      dispatch(getTopFendersAction());
    } else {
      dispatch(getGuitars());
    }
  };
  return { handleTopGuitars };
}

export default useTopGuitars;
