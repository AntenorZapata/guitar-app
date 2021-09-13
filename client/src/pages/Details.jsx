import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../actions';

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>{guitar.player}</h1>
    </div>
  );
}

export default Details;
