import axios from 'axios';

const url = 'http://localhost:3001/guitars';

export const fetchGuitars = () => axios.get(url);

export const createGuitar = (guitar) => axios.post(url, guitar);
