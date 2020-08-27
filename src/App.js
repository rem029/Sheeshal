import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './routes/home';
import Menu from './routes/menu';
import Order from './routes/order';

import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const tmp = 'FROM APP JS';
  const [sideBar, setSideBar] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <Router basename="/">
      <Header sideBar={sideBar} setSideBar={setSideBar}>
        <nav>
          <ul>
            <li>
              <Link
                className={activePage === 'home' ? 'link-active-nav link-active-side-bar' : ''}
                to="/"
                onClick={(e) => {
                  setSideBar(false);
                  setActivePage('home');
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={activePage === 'menu' ? 'link-active-nav link-active-side-bar' : ''}
                to="/menu"
                onClick={(e) => {
                  setSideBar(false);
                  setActivePage('menu');
                }}
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                className={activePage === 'order' ? 'link-active-nav link-active-side-bar' : ''}
                to="/order"
                onClick={(e) => {
                  setSideBar(false);
                  setActivePage('order');
                }}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      </Header>

      <Switch>
        <Route path="/menu">
          <Menu tmp={tmp} />
        </Route>
        <Route path="/order">
          <Order tmp={tmp} />
        </Route>
        <Route exact path="/">
          <Home tmp={tmp} />
        </Route>
        <Route component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
