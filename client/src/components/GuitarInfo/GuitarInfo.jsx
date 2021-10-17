import React from 'react';
import './GuitarInfo.css';
import { Link } from 'react-router-dom';

function GuitarInfo({ guitar }) {
  return (
    <section className="guitar-info">
      <div className="guitar__info-topics">
        <h3>Ano:</h3>
        {guitar.year}
      </div>
      <div className="guitar__info-topics">
        <h3>
          Modelo:
        </h3>
        {guitar.summary}
      </div>
      <div className="guitar__info-topics topic-description">
        <h3>
          Descrição:
        </h3>
        {guitar.description}
      </div>
      <div className="guitar__info-right-content">
        <div className="gt-songs">
          <div className="guitar__info-topics">
            <h3>
              Guitarrista:
            </h3>
            {guitar.player}
          </div>
          <div className="guitar__info-topics">
            <h3>
              Músicas:
            </h3>
            {guitar.songs}
          </div>
        </div>
        <div className="price-country">
          <div className="guitar__info-topics">
            <h3>
              Preço:
            </h3>
            R$
            {guitar.price}
          </div>
          <div className="guitar__info-topics">
            <h3>
              País:
            </h3>
            {guitar.country}
          </div>
        </div>
      </div>
      <div className="guitar__info-topics">
        <a href={guitar.link} target="_blank" rel="noreferrer">Confira!</a>
      </div>
    </section>
  );
}

export default GuitarInfo;
