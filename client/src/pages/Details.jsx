import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import {
  getById, getReviews, getReviewById, createReviewAction,
} from '../actions';

function Details({ match: { params: { id } } }) {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  const guitar = useSelector((state) => state.guitars.guitar);
  const reviews = useSelector((state) => state.guitars.reviewById);
  const [review, setReview] = useState({ rating: '', review: '' });
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [rev, setRev] = useState('');

  const handleReviewValues = (e) => {
    const { name } = e.target;
    setReview({ ...review, [name]: e.target.value });
  };

  useEffect(async () => {
    dispatch(getById(id));
    dispatch(getReviewById(id));
  }, [reviews]);

  const handleAddReview = async (e) => {
    e.preventDefault();
    const res = await dispatch(createReviewAction(id, review, token));
    console.log(res);
  };

  return (
    <div>
      <Header />
      <h1>{guitar.model}</h1>
      {token && (
      <form onSubmit={handleAddReview}>
        <label htmlFor="review">
          Adicione um Review
          <input
            type="text"
            id="review"
            name="review"
            value={review.review}
            required
            onChange={handleReviewValues}
          />
        </label>
        <label htmlFor="rating">
          Adicione uma nota
          <select
            id="review"
            name="rating"
            value={review.rating}
            onChange={handleReviewValues}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="submit"> Adicionar</button>
      </form>
      )}
      {reviews.length ? reviews.map((revi) => (
        <div key={revi.id}>
          <p key={revi._id}>{revi.review}</p>
          {email === revi.user.email && <button type="button">deletar</button>}
        </div>
      )) : null}
    </div>
  );
}

export default Details;
