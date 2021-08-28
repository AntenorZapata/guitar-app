import axios from 'axios';

const url = 'http://localhost:3001/guitars';

const fetchGuitars = () => axios.get(url);

export default fetchGuitars;
