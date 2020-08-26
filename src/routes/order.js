import React from 'react';

import './order.css';
function Order(props) {
  return (
    <div className="order">
      Order Page Test
      <div>{props.tmp}</div>
    </div>
  );
}

export default Order;
