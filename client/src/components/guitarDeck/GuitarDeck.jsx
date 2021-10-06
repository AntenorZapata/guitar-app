import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BtnsPage from '../BtnsPage/BtnsPage';
import Footer from '../Footer/Footer';
import GuitarCard from '../guitarCard/GuitarCard';
import './GuitarDeck.css';

export default function GuitarDeck({ guitars, token }) {
  // const guitars = useSelector((state) => state.guitars.allGuitars);
  const [page, setPage] = useState(0);

  const handleBtnPage = (index) => {
    setPage(index);
  };

  return (
    <>
      <div className="btns-page-container">
        <BtnsPage
          handleBtnPage={handleBtnPage}
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
