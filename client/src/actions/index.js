import { ToastContainer, toast } from 'react-toastify';

import {
  fetchGuitars,
  createGuitar,
  login,
  forgotPassword,
  signupUser,
  resetPass,
  getGuitarById,
  updateGuitar,
  fetchReviews,
  deleteGuitar,
  fetchReviewById,
  createReview,
  deleteReview,
  createFavorite,
  deleteFavorite,
  getFavoriteByEmail,
  getFavoriteById,
  getReviewByEmail,
  fetchCheapGuitars,
  fetchRareGuitars,
  fetchTopFenders,
} from '../api';
import {
  FETCH_ALL,
  CREATE_GUITAR,
  LOGIN,
  FORGOT_PASS,
  FORGOT_ERR,
  RESET_ERR,
  CLEAR_ERRORS, SIGNUP,
  RESET,
  SIGNUP_ERR,
  GET_GUITAR,
  CLEAR_GUITAR,
  UPDATE_GUITAR,
  GET_REVIEWS,
  GET_REVIEWS_BY_ID,
  CREATE_FAV,
  DELETE_FAV,
  GET_FAV_BY_EMAIL,
  GET_FAV_BY_ID,
  CLEAR_REVIEWS,
  GET_FAVORITES_PAGE,
  CLEAR_FAVORITES,
  GET_REV_BY_EMAIL,
  GET_FILTERED_GUITARS,

} from './types';

// Actions Creators
export const getGuitars = () => async (dispatch) => {
  try {
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const createGuitarData = (guitar) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await createGuitar(guitar, token);
    dispatch({ type: CREATE_GUITAR, payload: data.guitar });
  } catch (err) {
    return err.response.data.message;
  }
};

export const updateGuitarData = (guitar) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await updateGuitar(guitar, token);
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteGuitarData = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await deleteGuitar(id, token);
    const { data } = await fetchGuitars();
    dispatch({ type: FETCH_ALL, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const loginAction = (user) => async (dispatch) => {
  try {
    const { data } = await login(user);
    localStorage.setItem('token', data.token);
    const userCurr = { email: data.email, name: data.name };
    localStorage.setItem('user', JSON.stringify(userCurr));
    dispatch({ type: LOGIN, payload: data });
  } catch (err) {
    return err.response.data.message;
  }
};

export const forgotAction = (email) => async (dispatch) => {
  try {
    const { data } = await forgotPassword(email);
    toast.success('Senha enviada para email cadastrado.');
    dispatch({ type: FORGOT_PASS, payload: data });
  } catch (err) {
    dispatch({ type: FORGOT_ERR, payload: err.response.data.message });
  }
};

export const signupAction = (user) => async (dispatch) => {
  try {
    const { data } = await signupUser(user);
    dispatch({ type: SIGNUP, payload: data.token });
  } catch (err) {
    dispatch({ type: SIGNUP_ERR, payload: err.response.data.message });
    return err.response.data.message;
  }
};

export const resetAction = (password, token) => async (dispatch) => {
  try {
    const { data } = await resetPass(password, token);
    dispatch({ type: RESET, payload: data.token });
  } catch (err) {
    dispatch({ type: RESET_ERR, payload: err.response.data.message });
    return err.response.data.message;
  }
};

export const getGuitarByIdAction = (id) => async (dispatch) => {
  try {
    const { data } = await getGuitarById(id);
    dispatch({ type: GET_GUITAR, payload: data.guitar });
  } catch (err) {
    return err.response.data.message;
  }
};

export const createReviewAction = (id, review, token) => async (dispatch) => {
  try {
    await createReview(id, review, token);
    const { data } = await fetchReviewById(id, token);
    dispatch({ type: GET_REVIEWS_BY_ID, payload: data.reviews });
  } catch (err) {
    return err.response.data.message;
  }
};

export const clearReviews = () => ({
  type: CLEAR_REVIEWS,
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

export const createFavoriteAction = (fav, token) => async (dispatch) => {
  try {
    const response = await createFavorite(fav, token);
    const { data } = await getFavoriteByEmail(fav.user, token);
    const payData = { all: [...data.favorites], new: { ...response.data.newFavorite } };
    dispatch({ type: CREATE_FAV, payload: payData });
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteFavoriteAction = (id, token) => async (dispatch) => {
  try {
    const { data } = await deleteFavorite(id, token);
    dispatch({ type: DELETE_FAV, payload: null });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getFavoriteByEmailAction = (email, token) => async (dispatch) => {
  try {
    const { data } = await getFavoriteByEmail(email, token);
    dispatch({ type: GET_FAV_BY_EMAIL, payload: data.favorites });
  } catch (err) {
    return err;
  }
};

export const getFavoriteByGuitarId = (id, token) => async (dispatch) => {
  try {
    const { data } = await getFavoriteById(id, token);
    dispatch({ type: GET_FAV_BY_ID, payload: data.favorites });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await fetchReviews();
    dispatch({ type: GET_REVIEWS, payload: data.reviews });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getReviewById = (id, token) => async (dispatch) => {
  try {
    const { data } = await fetchReviewById(id, token);
    dispatch({ type: GET_REVIEWS_BY_ID, payload: data.reviews });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getReviewByEmailAction = (email, token) => async (dispatch) => {
  try {
    const { data } = await getReviewByEmail(email, token);
    dispatch({ type: GET_REV_BY_EMAIL, payload: data.reviews });
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteReviewAction = (id, token, gtId) => async (dispatch) => {
  try {
    await deleteReview(id, token);
    const { data } = await fetchReviewById(gtId, token);
    dispatch({ type: GET_REVIEWS_BY_ID, payload: data.reviews });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getCheapGuitarsAction = () => async (dispatch) => {
  try {
    const { data } = await fetchCheapGuitars();
    dispatch({ type: GET_FILTERED_GUITARS, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getRareGuitarsAction = () => async (dispatch) => {
  try {
    const { data } = await fetchRareGuitars();
    dispatch({ type: GET_FILTERED_GUITARS, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const getTopFendersAction = () => async (dispatch) => {
  try {
    const { data } = await fetchTopFenders();
    dispatch({ type: GET_FILTERED_GUITARS, payload: data.result });
  } catch (err) {
    return err.response.data.message;
  }
};

export const clearGuitar = () => ({
  type: CLEAR_GUITAR,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
