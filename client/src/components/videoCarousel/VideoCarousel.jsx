import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../carousel/ImageCarousel.css';
import ReactPlayer from 'react-player';

function VideoCarousel({ guitar }) {
  return (

    <div className="guitar-info-left-content">
      <Carousel className="carousel" useKeyboardArrows>
        <div className="card__picture card__carousel">
          <ReactPlayer url="https://www.youtube.com/watch?v=kI90CoSVQ-k" />
        </div>
        <div className="card__picture card__carousel">
          <ReactPlayer url="https://www.youtube.com/watch?v=u9K3opFAh64" />
        </div>
        <div className="card__picture card__carousel">
          <ReactPlayer url="https://www.youtube.com/watch?v=hyVGQ_3EuUY" />
        </div>

      </Carousel>
    </div>
  );
}

export default VideoCarousel;

// className="card__picture-img"
