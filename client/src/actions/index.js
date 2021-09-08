import { fetchGuitars, createGuitar, login } from '../api';
import { FETCH_ALL, CREATE_GUITAR, LOGIN } from './types';

// Actions Creators
export const getGuitars = () => async (dispatch) => {
  try {
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createGuitarData = (guitar) => async (dispatch) => {
  try {
    const { data } = await createGuitar(guitar);
    dispatch({ type: CREATE_GUITAR, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const loginAction = (user) => async (dispatch) => {
  try {
    const { data } = await login(user);
    localStorage.setItem('token', data.token);
    dispatch({ type: LOGIN, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
