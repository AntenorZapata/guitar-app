import axios from 'axios';

const url = 'http://localhost:3001/api/v1/guitars';
const urlUpdate = 'http://localhost:3001/api/v1/guitars/:id';

const userUrl = 'http://localhost:3001/api/v1/users/login';
const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword';
const signupUrl = 'http://localhost:3001/api/v1/users/signup';

const config = {
  Headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchGuitars = () => axios.get(url);

export const createGuitar = (guitar, token) => axios.post(url, guitar, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const updateGuitar = (guitar, token) => axios.put(`http://localhost:3001/api/v1/guitars/${guitar._id}`, guitar, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const deleteGuitar = (id, token) => axios.delete(`http://localhost:3001/api/v1/guitars/${id}`, { headers: { 'Content-Type': 'application/json', authorization: `${token}` } });

export const login = (user) => axios.post(userUrl, user, config);

export const forgotPassword = (email) => axios.post(forgotUrl, email, config);

export const signupUser = (user) => axios.post(signupUrl, user, config);

export const resetPass = (password, token) => axios.post(`http://localhost:3001/api/v1/users/resetPassword/${token}`, password, config);

export const getGuitarById = (id) => axios.get(`http://localhost:3001/api/v1/guitars/${id}`, null, config);
