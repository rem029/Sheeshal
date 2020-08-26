import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__address">
        <li className="footer__address__item">
          <span className="footer__address__item__icon">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </span>
          44372121
          <span className="footer__address__item__icon">
            <FontAwesomeIcon icon={faMobileAlt} />
          </span>
          50172121
        </li>
        <span className="footer__address__item__icon"></span>
        <li className="footer__address__item">
          <p>Souq Al Furjan 9, Shop #5 Abdulla Bin Amr St. 802, Zone 67</p>
          <p>Al Dafna, Doha, Qatar</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
