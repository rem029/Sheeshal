import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './custom.slider.css';

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

    console.log(activeIndex);
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="container__slider" onMouseEnter={AutoPlayStop} onMouseLeave={AutoPlayStart}>
      {children.map((item, index) => {
        return (
          <div className={'slider__item slider__item-active-' + (activeIndex + 1)} key={index}>
            {item}
          </div>
        );
      })}
      <div className="container__controls">
        <div className="container__controls-link">
          {children.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  activeIndex === index
                    ? 'container__controls-link-small container__controls-link-small-active'
                    : 'container__controls-link-small'
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div>

        <button
          className="container__controls-btn-next"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button
          className="container__controls-btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
    </div>
  );
}

export default CustomCarousel;
