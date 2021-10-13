import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel({ guitar }) {
  console.log(guitar.images[2]);
  return (
    <>
      <Carousel width="100%" heigt="20%">

        <div className="card__picture">
          <img
            src={`../images/details/${guitar.images[0]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>
        <div className="card__picture">
          <img
            src={`../images/details/${guitar.images[1]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>
        <div className="card__picture">
          <img
            src={`../images/details/${guitar.images[2]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>

      </Carousel>
    </>
  );
}

export default ImageCarousel;
