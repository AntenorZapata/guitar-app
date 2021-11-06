import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
// import VanillaTilt from 'vanilla-tilt';
import Header from '../../components/header/Header';
import {
  getGuitarByIdAction, getReviews, getReviewById, createReviewAction,
  deleteReviewAction, createFavoriteAction, deleteFavoriteAction,
  getFavoriteByEmailAction,
} from '../../actions';
import StarRating from '../../components/starRating/StarRating';
import useDetails from '../../hooks/useDetails';
import './Details.css';
import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import Footer from '../../components/Footer/Footer';
import ImageCarousel from '../../components/carousel/ImageCarousel';
import GuitarInfo from '../../components/GuitarInfo/GuitarInfo';
import VideoCarousel from '../../components/videoCarousel/VideoCarousel';
import Tilt from '../../components/tilt/Tilt';

function Details({ match: { params: { id } } }) {
  const guitar = useSelector((state) => state.guitars.guitar);
  const favorites = useSelector((state) => state.favorites.allFavorites);
  const reviews = useSelector((state) => state.reviews.reviewById);
  const tiltRef = React.useRef();

  const {
    handleChange, handleFavorite, handleAddReview, handleReviewValues, handleDeleteReview,
    setFavId, favId, token, review, email,
  } = useDetails();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitarByIdAction(id));
    dispatch(getReviewById(id, token));
    if (token) dispatch(getFavoriteByEmailAction(email, token));
  }, []);

  useEffect(() => {
    if (token) favorites.map((el) => el.guitar === id && setFavId(el._id));
  }, [favorites]);

  return (
    <div>
      <Header />
      {!Object.keys(guitar).length ? (
        <div className="loading">
          <Loader
            type="ThreeDots"
            color="#33105f79"
            className="load-icon"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )
        : (
          <section className="main__container__details">
            <div className="overflow__content" />
            <DetailsHeader
              handleFavorite={handleFavorite}
              favId={favId}
              guitar={guitar}
              id={id}
            />
            <div className="guitar-info-content">
              <ImageCarousel guitar={guitar} />
              <GuitarInfo guitar={guitar} />
            </div>
            <div className="video-container">
              <VideoCarousel />
              <Tilt className="tilt">
                <img src="https://http2.mlstatic.com/D_NQ_NP_858940-MLB46183318472_052021-O.jpg" alt="" />
              </Tilt>
            </div>

            {token && (
            <section>
              <StarRating
                count={5}
                starValue={review.rating}
                activeColor="f00"
                inactiveColor="#ddd"
                onChange={handleChange}
                bool
              />
              <form onSubmit={(e) => handleAddReview(e, id)}>
                <label htmlFor="review">
                  Adicione um comentário
                  <input
                    type="text"
                    id="review"
                    name="review"
                    value={review.review}
                    required
                    onChange={handleReviewValues}
                    placeholder="max 760 caracteres"
                  />
                </label>
                <button
                  type="submit"
                  disabled={review.review.length > 760}
                >
                  Adicionar
                </button>
              </form>
            </section>
            )}
            {reviews.length ? reviews.map((revi) => (
              <div key={revi.id} className="review__container">
                <p key={revi._id}>{revi.review}</p>
                <StarRating
                  className="show-rating"
                  starValue={revi.rating}
                />
                {email === revi.user.email && (
                <button
                  onClick={() => handleDeleteReview(revi._id, id)}
                  type="button"
                >
                  deletar
                </button>
                )}
              </div>
            )) : null}
          </section>
        )}
      <div className="overflow__content-config" />
      <Footer />
    </div>
  );
}

export default Details;
