import React from 'react';

import './section.main.carousel.css';

import CustomSlider from '../misc/custom.slider';

function SectionMainCarousel() {
  return (
    <div className="main__carousel">
      <CustomSlider>
        <div className="main__carousel__slides">
          <img
            className="main__carousel__slide__bgimg"
            src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="sheeshal-bg-img"
          ></img>
          <div className="main__carousel__slide__text">
            <h2>
              <span>For a Truely</span>
              <span className="">Dining</span>
              <span className="">Destination</span>
            </h2>
            <a className="main__carousel__slide__text_callout" href="tel:44372121">
              ORDER NOW
            </a>
          </div>
        </div>
        <div className="main__carousel__slides">
          <img
            className="main__carousel__slide__bgimg"
            src="https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="sheeshal-bg-img"
          ></img>
        </div>
      </CustomSlider>
    </div>
  );
}

export default SectionMainCarousel;
