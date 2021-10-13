import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BtnsPage from '../BtnsPage/BtnsPage';
import Footer from '../Footer/Footer';
import GuitarCard from '../guitarCard/GuitarCard';
import './GuitarDeck.css';

export default function GuitarDeck({ guitars, token }) {
  const [page, setPage] = useState(0);

  const handleBtnPageBack = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleBtnPageNext = () => {
    if (page + 1 < guitars.length) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="btns-page-container">
        <BtnsPage
          page={page}
          handleBtnPageBack={handleBtnPageBack}
          handleBtnPageNext={handleBtnPageNext}
          arrayOfElements={guitars}
        />
      </div>
      <div className={token ? 'card-container'
        : 'card-container card-container-margin'}
      >
        {guitars
        && guitars.length > 0
        && guitars[page].map((gt) => <GuitarCard guitar={gt} key={gt._id} />)}
      </div>
    </>
  );
}
