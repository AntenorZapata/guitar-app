import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getById } from '../actions';

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const [rev, setRev] = useState('');
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getById(id));

    const reviews = await axios.get('http://localhost:3001/api/v1/reviews');
    setRev(reviews.data.reviews);
  }, []);

  // Cria essa lógica no backend

  return (
    <div>
      <h1>{guitar.player}</h1>
      {rev.length ? rev.map((revi) => (
        revi.guitar === id && <p key={revi._id}>{revi.review}</p>
      )) : null}
    </div>
  );
}

export default Details;
