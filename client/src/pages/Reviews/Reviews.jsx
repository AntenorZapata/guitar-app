import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ImFileEmpty } from 'react-icons/im';
import './Reviews.css';
import paginate from '../../utils/paginate';

import { getReviewByEmailAction, deleteReviewAction } from '../../actions';
import AccountTitle from '../../components/AccountTitle/AccountTitle';

import Header from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import StarRating from '../../components/starRating/StarRating';
import BtnsPage from '../../components/BtnsPage/BtnsPage';
import Footer from '../../components/Footer/Footer';

function Reviews() {
  const token = localStorage.getItem('token') || '';
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  const { email } = userLocal;
  const reviews = useSelector((state) => state.reviews.reviewsByUser);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const handleDeleteReview = (revId, gtId) => {
    dispatch(deleteReviewAction(revId, token, gtId));
  };

  useEffect(() => {
    dispatch(getReviewByEmailAction(email, token));
  }, []);

  const handleBtnPage = (index) => {
    setPage(index);
  };

  return (
    <div>
      <Header />
      <section className="config__container">
        <div className="overflow__content" />
        <SideBar />
        {reviews.length > 3
          && (
            <BtnsPage
              handleBtnPage={handleBtnPage}
              arrayOfElements={paginate(reviews, 3)}
            />
          ) }
        <div className="review__container">
          {reviews.length ? paginate(reviews, 3)[page].map((rev) => (
            <div key={rev._id} className="card__reviews card__reviews__container">
              <StarRating starValue={rev.rating} />
              <p>{rev.review}</p>
              <button
                className="btn btn-review"
                type="button"
                onClick={() => handleDeleteReview(rev._id, rev.guitar)}
              >
                deletar
              </button>
            </div>
          ))
            : (
              <div className="empty__msg__container">
                <p className="empty__msg">Você não fez comentários.</p>
                <ImFileEmpty className="icon-fav" />
              </div>
            )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Reviews;
