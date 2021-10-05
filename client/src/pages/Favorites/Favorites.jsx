import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty } from 'react-icons/io';
import Header from '../../components/header/Header';
import GuitarCard from '../../components/guitarCard/GuitarCard';
import { getFavoriteByEmailAction, deleteFavoriteAction } from '../../actions';
import SideBar from '../../components/sideBar/SideBar';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import './Favorites.css';
import paginate from '../../utils/paginate';
import BtnsPage from '../../components/BtnsPage/BtnsPage';
import Footer from '../../components/Footer/Footer';

const token = localStorage.getItem('token') || '';
function Favorites() {
  const userLocal = JSON.parse(localStorage.getItem('user')) || null;
  let email = '';
  if (userLocal) email = userLocal.email;
  const favorites = useSelector((state) => state.favorites.allFavorites);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavoriteByEmailAction(email, token));
    }
  }, [favorites]);

  const handleDeleteFav = async (id) => {
    dispatch(deleteFavoriteAction(id, token));
  };

  const handleBtnPage = (index) => {
    setPage(index);
  };

  return (
    <div>
      <Header />
      <section className="config__container">
        {/* <AccountTitle title="Favoritos" /> */}
        <div className="overflow__content" />
        <SideBar />
        {favorites.length > 10 && (
          <BtnsPage
            handleBtnPage={handleBtnPage}
            arrayOfElements={paginate(favorites, 12)}
          />
        )}
        <div className="card-fav-container">
          {favorites.length ? paginate(favorites, 10)[page].map((gt) => (

            <GuitarCard
              guitar={gt}
              favorite
              key={gt.guitar}
              handleDeleteFav={handleDeleteFav}
            />

          )) : (
            <div className="empty__msg__container">
              <p className="empty__msg">Você não tem favoritos.</p>
              <IoMdHeartEmpty className="icon-fav" />
            </div>
          )}
        </div>
      </section>
      <div className="overflow__content-config" />
      <Footer />
    </div>
  );
}

export default Favorites;
