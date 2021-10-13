import React from 'react';
import './BtnsPage.css';
import { IoCaretBack } from 'react-icons/io5';
import { MdSkipNext } from 'react-icons/md';

function BtnsPage({
  arrayOfElements, handleBtnPageBack, page, handleBtnPageNext,
}) {
  return (
    <div className="btns-page">
      <IoCaretBack
        value="back"
        className="controls-icon"
        onClick={handleBtnPageBack}
      />

      <IoCaretBack
        className="controls-icon-next"
        name="next"
        disabled={page + 1 === arrayOfElements.length}
        onClick={handleBtnPageNext}
      />

    </div>
  );
}

export default BtnsPage;
