import React from 'react';
import './GuitarInfo.css';

function GuitarInfo({ guitar }) {
  return (
    <section className="guitar-info">
      <div>
        <h3>
          Ano:
          {guitar.year}
        </h3>
      </div>
      <div>

        <h3>
          Resumo:
          {guitar.summary}
        </h3>
      </div>
      <div>
        <h3>
          Descrição:
          <p>
            {guitar.description}
          </p>
        </h3>
      </div>
      <div>
        <h3>
          Guitarrista:
          {guitar.player}
        </h3>
      </div>
      <div>
        <h3>
          Músicas:
          {guitar.songs}
        </h3>
      </div>
      <div>
        <h3>
          Preço:
          {guitar.price}
        </h3>
      </div>
      <div>
        <h3>
          País:
          {guitar.price}
        </h3>
      </div>
      <div>
        <h3>
          País:
          {guitar.link}
        </h3>
      </div>
    </section>
  );
}

export default GuitarInfo;
