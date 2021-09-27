import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getReviewByEmailAction, deleteReviewAction } from '../actions';

import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';
import StarRating from '../components/starRating/StarRating';

function Reviews() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  const { email } = userLocal;
  const reviews = useSelector((state) => state.reviews.reviewsByUser);

  const dispatch = useDispatch();

  const handleDeleteReview = (revId, gtId) => {
    dispatch(deleteReviewAction(revId, token, gtId));
  };

  useEffect(() => {
    dispatch(getReviewByEmailAction(email, token));
  }, []);

  return (
    <div>
      <Header />
      <h1>Minha Conta</h1>
      <SideBar />
      {reviews.length ? reviews.map((rev) => (
        <div key={rev._id}>
          <StarRating starValue={rev.rating} />
          <p>{rev.review}</p>
          <button type="button" onClick={() => handleDeleteReview(rev._id, rev.guitar)}>deletar</button>
        </div>
      )) : 'você não escreveu nenhum review'}

    </div>
  );
}

export default Reviews;
