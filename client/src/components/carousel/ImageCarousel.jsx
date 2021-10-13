import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';

function ImageCarousel({ guitar }) {
  return (

    <div className="guitar-info-left-content">
      <Carousel className="carousel" useKeyboardArrows>
        <div className="card__picture card__carousel">
          <img
            src={`../images/details/${guitar.images[0]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>
        <div className="card__picture card__carousel">
          <img
            src={`../images/details/${guitar.images[1]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>
        <div className="card__picture card__carousel">
          <img
            src={`../images/details/${guitar.images[2]}`}
            alt={guitar.brand}
            className="card__picture-img"
          />
        </div>

      </Carousel>
    </div>
  );
}

export default ImageCarousel;
