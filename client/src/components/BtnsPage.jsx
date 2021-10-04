import React from 'react';

function BtnsPage({ arrayOfElements, handleBtnPage }) {
  return (
    <div className="btns-page">
      {arrayOfElements.map((btn, index) => (
        <button
          key={index}
          type="button"
          className="btn-page"
          onClick={() => handleBtnPage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default BtnsPage;
