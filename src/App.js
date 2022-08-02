import Navbar from './components/Navbar';
import React, { useState } from 'react';
import GlobalStyle from './components/globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/index';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';

function App() {
const [ isOpen, setIsOpen ] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen);
};

  return (
  <>
  <Router>
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData} />
    <InfoSection {...InfoData} />
  </Router>
  </>
  );
}

export default App;
