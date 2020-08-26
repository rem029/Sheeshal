import React from 'react';

import '../misc/button.burger.css';

function ButtonBurger({ toggle }) {
  return (
    <span>
      <div className={toggle ? 'side-drawer-btn-line' : 'side-drawer-btn-line top'}></div>
      <div className={toggle ? 'side-drawer-btn-line' : 'side-drawer-btn-line mid'}></div>
      <div className={toggle ? 'side-drawer-btn-line' : 'side-drawer-btn-line bot'}></div>
    </span>
  );
}

export default ButtonBurger;
