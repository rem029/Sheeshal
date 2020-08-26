import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import HeaderNavLinks from './header.nav.links';
import HeaderSideDrawer from './header.side.drawer';
import ButtonBurger from '../misc/button.burger';

function Header({ sideBar, setSideBar, children }) {
  return (
    <div>
      <header>
        <div className="header-container__nav">
          <HeaderNavLinks>{children}</HeaderNavLinks>
        </div>

        <div className="header-container__sidebar">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSideBar(!sideBar);
            }}
          >
            <ButtonBurger toggle={!sideBar} />
          </button>
        </div>
        <div className="header-container__logo">
          <Link to="/">
            <img className="home-logo" src="/resources/images/logo-3small.svg" alt="sheeshal-logo"></img>
          </Link>
        </div>
      </header>

      <HeaderSideDrawer sideBar={sideBar} setSideBar={setSideBar}>
        {children}
      </HeaderSideDrawer>
    </div>
  );
}

export default Header;
