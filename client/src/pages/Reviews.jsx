import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ImFileEmpty } from 'react-icons/im';

import { getReviewByEmailAction, deleteReviewAction } from '../actions';
import AccountTitle from '../components/AccountTitle/AccountTitle';

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
      <section className="main__container config__main">
        <div className="overflow__content" />
        <SideBar />
        {reviews.length ? reviews.map((rev) => (
          <div key={rev._id}>
            <StarRating starValue={rev.rating} />
            <p>{rev.review}</p>
            <button type="button" onClick={() => handleDeleteReview(rev._id, rev.guitar)}>deletar</button>
          </div>
        ))
          : (
            <div className="empty__msg__container">
              <p className="empty__msg">Você não escreveu nenhum review.</p>
              <ImFileEmpty className="icon-fav" />
            </div>
          )}
      </section>

    </div>
  );
}

export default Reviews;
