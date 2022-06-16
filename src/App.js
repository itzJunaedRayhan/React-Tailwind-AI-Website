import React from 'react';
import './App.css';
import Blogs from './Components/Blogs';
import Brand from './Components/Brand';
import CTA from './Components/CTA';
import Features from './Components/Features';
import FeaturesTwo from './Components/FeaturesTwo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import WhatIsGPT3 from './Components/WhatIsGPT3';

function App() {
  return (
    <div className="App bg-bg">
      <Header/>
      <Brand/>
      <WhatIsGPT3/>
      <Features/>
      <FeaturesTwo/>
      <CTA/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
