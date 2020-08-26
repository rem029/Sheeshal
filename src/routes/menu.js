import React from 'react';

import './menu.css';

function Menu(props) {
  return (
    <div className="menu">
      Menu Page Test
      <div>{props.tmp}</div>
    </div>
  );
}

export default Menu;
