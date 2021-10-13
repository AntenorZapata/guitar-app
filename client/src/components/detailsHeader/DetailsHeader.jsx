import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import './DetailsHeader.css';

function DetailsHeader({
  guitar, handleFavorite, favId, id,
}) {
  return (
    <>
      <div className="details-title">
        <h1>{`${guitar.brand} ${guitar.model}`}</h1>
        <MdFavorite
          onClick={() => handleFavorite(id)}
          type="button"
          className={favId ? 'black-heart' : 'heart'}
        />
      </div>
    </>
  );
}

export default DetailsHeader;
