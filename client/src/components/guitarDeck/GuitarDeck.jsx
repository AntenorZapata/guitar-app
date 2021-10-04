import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BtnsPage from '../BtnsPage/BtnsPage';
import GuitarCard from '../guitarCard/GuitarCard';
import './GuitarDeck.css';

export default function GuitarDeck({ guitars }) {
  // const guitars = useSelector((state) => state.guitars.allGuitars);
  const [page, setPage] = useState(0);

  const handleBtnPage = (index) => {
    setPage(index);
  };

  return (
    <>
      <div className="card-container">
        {guitars
        && guitars.length > 0
        && guitars[page].map((gt) => <GuitarCard guitar={gt} key={gt._id} />)}
      </div>
      <BtnsPage
        handleBtnPage={handleBtnPage}
        arrayOfElements={guitars}
      />
      {/* <div className="btns-page">
        {guitars.map((btn, index) => (
          <button
            key={index}
            type="button"
            className="btn-page"
            onClick={() => handleBtnPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </>
  );
}
