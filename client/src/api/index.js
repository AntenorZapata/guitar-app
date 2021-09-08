import axios from 'axios';

const url = 'http://localhost:3001/api/v1/guitars';
const userUrl = 'http://localhost:3001/api/v1/users/login';
const forgotUrl = 'http://localhost:3001/api/v1/users/forgotPassword/';

export const fetchGuitars = () => axios.get(url);

export const createGuitar = (guitar) => axios.post(url, guitar);

export const login = (user) => axios.post(userUrl, user);

export const forgotPassword = (email) => axios.post(forgotUrl, email);
