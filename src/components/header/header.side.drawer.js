import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './header.side.drawer.css';

function HeaderSideDrawer({ sideBar, setSideBar, children }) {
  return (
    <div
      className={
        sideBar ? 'header-side-drawer-container header-side-drawer-container__show' : 'header-side-drawer-container'
      }
    >
      <div
        className={
          sideBar
            ? ' header-side-drawer-container-menu header-side-drawer-container-menu__show'
            : 'header-side-drawer-container-menu'
        }
      >
        <div className="header-side-drawer-container-menu__sub">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSideBar(!sideBar);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        <div className="header-side-drawer-container-menu__line"></div>
        {children}
        <div className="header-side-drawer-container-menu__address">
          <ul>
            <li>44372121</li>
            <li>50172121</li>
            <li>Souq Al Furjan 9, Shop #5 Abdulla Bin Amr St. 802, Zone 67 </li>
            <li>Al Dafna, Doha, Qatar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderSideDrawer;
