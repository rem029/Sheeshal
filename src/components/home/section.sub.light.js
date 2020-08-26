import React from 'react';

import './section.sub.light.css';
import menu from '../../data/menu';

function SectionSubLight() {
  return (
    <div className="section section__sub--light">
      <h2 className="section__sub--light__header">WHAT WE SERVE</h2>
      <div className="box__container">
        {menu.map((food, index) => {
          return (
            <div key={index} className="box">
              <img src={food.imgUrl} alt={food.imgAlt}></img>
              <div className="box__caption">
                <h3>{food.type}</h3>
                <p>{food.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSubLight;
