import axios from 'axios';

const url = 'http://localhost:3001/api/v1/guitars';
const userUrl = 'http://localhost:3001/api/v1/users/login';
const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword';
const signupUrl = 'http://localhost:3001/api/v1/users/signup';

const config = {
  Headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchGuitars = () => axios.get(url);

export const createGuitar = (guitar) => axios.post(url, guitar, config);

export const login = (user) => axios.post(userUrl, user, config);

export const forgotPassword = (email) => axios.post(forgotUrl, email, config);

export const signupUser = (user) => axios.post(signupUrl, user, config);

export const resetPass = (password, token) => axios.post(`http://localhost:3001/api/v1/users/resetPassword/${token}`, password, config);
