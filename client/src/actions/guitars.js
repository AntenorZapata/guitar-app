import fetchGuitars from '../api';
import { FETCH_ALL } from './types';

// Actions Creators

const getGuitars = () => async (dispatch) => {
  try {
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export default getGuitars;
