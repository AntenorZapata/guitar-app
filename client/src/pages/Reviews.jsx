import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getReviewByEmailAction, deleteReviewAction } from '../actions';

import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';

function Reviews() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  const { email } = userLocal;
  const reviews = useSelector((state) => state.reviews.reviewsByUser);

  const dispatch = useDispatch();

  useEffect(async () => {
    const a = await dispatch(getReviewByEmailAction(email, token));
  }, []);

  const handleDeleteReview = (revId, gtId) => {
    dispatch(deleteReviewAction(revId, token, gtId));
  };

  return (
    <div>
      <Header />
      <h1>Minha Conta</h1>
      <SideBar />
      {reviews.length ? reviews.map((rev) => (
        <div key={rev._id}>
          <p>{rev.review}</p>
          <button type="button" onClick={() => handleDeleteReview(rev._id, rev.guitar)}>deletar</button>
        </div>
      )) : 'você não escreveu nenhum review'}

    </div>
  );
}

export default Reviews;
