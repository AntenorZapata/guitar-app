import { ToastContainer, toast } from 'react-toastify';
import {
  fetchGuitars, createGuitar, login, forgotPassword,
} from '../api';
import {
  FETCH_ALL, CREATE_GUITAR, LOGIN, FORGOT_PASS, RESET_ERR, CLEAR_ERRORS,
} from './types';

// Actions Creators
export const getGuitars = () => async (dispatch) => {
  try {
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const createGuitarData = (guitar) => async (dispatch) => {
  try {
    const { data } = await createGuitar(guitar);
    dispatch({ type: CREATE_GUITAR, payload: data });
  } catch (err) {
    return err.response.data.message;
  }
};

export const loginAction = (user) => async (dispatch) => {
  try {
    const { data } = await login(user);
    localStorage.setItem('token', data.token);
    dispatch({ type: LOGIN, payload: data });
  } catch (err) {
    return err.response.data.message;
  }
};

export const forgotAction = (email) => async (dispatch) => {
  try {
    const { data } = await forgotPassword(email);
    dispatch({ type: FORGOT_PASS, payload: data });
    toast.success('Senha enviada para email cadastrado!');
  } catch (err) {
    dispatch({ type: RESET_ERR, payload: err.response.data.message });
  }
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
