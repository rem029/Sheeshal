import React from 'react';

import './home.css';

import SectionMain from '../components/home/section.main';
import SectionSubLight from '../components/home/section.sub.light';
import SectionSubDark from '../components/home/section.sub.dark';

function Home(props) {
  return (
    <div className="home">
      <SectionMain />
      <SectionSubLight />
      <SectionSubDark />
    </div>
  );
}

export default Home;
