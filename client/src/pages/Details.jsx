import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import { getById, getReviews, getReviewById } from '../actions';

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const reviews = useSelector((state) => state.guitars.reviewById);
  const user = useSelector((state) => state.user);

  // const [rev, setRev] = useState('');
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getById(id));
    dispatch(getReviewById(id));
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleAddReview}>
        <label htmlFor="review">
          Adicione um Review
          <input type="text" id="review" />
        </label>
        <button type="submit"> Adicionar</button>
      </form>
      <h1>{guitar.model}</h1>
      {reviews.length ? reviews.map((revi) => (
        revi.guitar === id && <p key={revi._id}>{revi.review}</p>
      )) : null}
    </div>
  );
}

export default Details;
