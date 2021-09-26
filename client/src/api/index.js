import axios from 'axios';

const url = 'http://localhost:3001/api/v1/guitars';
const urlUpdate = 'http://localhost:3001/api/v1/guitars/:id';
const cheapGuitars = 'http://localhost:3001/api/v1/guitars/top-5-cheap';
const rareGuitars = 'http://localhost:3001/api/v1/guitars/top-5-rare';
const fendersGuitars = 'http://localhost:3001/api/v1/guitars/top-5-fender';

const userUrl = 'http://localhost:3001/api/v1/users/login';
const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword';
const signupUrl = 'http://localhost:3001/api/v1/users/signup';
const reviewUrl = 'http://localhost:3001/api/v1/reviews';

const config = {
  Headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchGuitars = () => axios.get(url);

export const fetchCheapGuitars = () => axios.get(cheapGuitars);

export const fetchRareGuitars = () => axios.get(rareGuitars);

export const fetchTopFenders = () => axios.get(fendersGuitars);

export const fetchReviews = () => axios.get(reviewUrl);

export const fetchReviewById = (id, token) => axios.get(`http://localhost:3001/api/v1/guitars/${id}/reviews`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const deleteReview = (id, token) => axios.delete(`http://localhost:3001/api/v1/reviews/${id}`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const createReview = (id, review, token) => axios.post(`http://localhost:3001/api/v1/guitars/${id}/reviews`, review, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const createFavorite = (fav, token) => axios.post('http://localhost:3001/api/v1/favorites', fav, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const deleteFavorite = (id, token) => axios.delete(`http://localhost:3001/api/v1/favorites/${id}`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const getFavoriteByEmail = (email, token) => axios.get(`http://localhost:3001/api/v1/users/${email}/favorites`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const getReviewByEmail = (email, token) => axios.get(`http://localhost:3001/api/v1/users/${email}/reviews`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const getFavoriteById = (id, token) => axios.get(`http://localhost:3001/api/v1/guitars/${id}/favorites`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const createGuitar = (guitar, token) => axios.post(url, guitar, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const updateGuitar = (guitar, token) => axios.put(`http://localhost:3001/api/v1/guitars/${guitar._id}`, guitar, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const deleteGuitar = (id, token) => axios.delete(`http://localhost:3001/api/v1/guitars/${id}`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const login = (user) => axios.post(userUrl, user, config);

export const forgotPassword = (email) => axios.post(forgotUrl, email, config);

export const signupUser = (user) => axios.post(signupUrl, user, config);

export const resetPass = (password, token) => axios.post(`http://localhost:3001/api/v1/users/resetPassword/${token}`, password, config);

export const getGuitarById = (id) => axios.get(`http://localhost:3001/api/v1/guitars/${id}`, null, config);
