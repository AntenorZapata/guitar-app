import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../actions';

function Details({ match: { params: { id } } }) {
  const guitars = useSelector((state) => state.guitars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>details</h1>
    </div>
  );
}

export default Details;
