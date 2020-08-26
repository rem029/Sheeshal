import React, { useState } from 'react';

import './custom.carousel.css';

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container__carousel">
      <button
        className="btn__left"
        onClick={(e) => {
          e.preventDefault();
          setActiveIndex((prevVal) => {
            if (prevVal < 1) {
              return 0;
            } else {
              return prevVal - 1;
            }
          });
        }}
      >
        Prev
      </button>
      <button
        className="btn__right"
        onClick={(e) => {
          e.preventDefault();
          setActiveIndex((prevVal) => {
            if (prevVal >= children.length - 1) {
              return prevVal;
            } else {
              return prevVal + 1;
            }
          });
        }}
      >
        Next
      </button>

      {children.length > 1 ? (
        <div>
          {children.map((item, index) => {
            return (
              <div key={index} className={index === activeIndex ? 'active' : 'not_active'}>
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}

export default CustomCarousel;
