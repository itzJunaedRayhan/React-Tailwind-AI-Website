import React from 'react';
import './App.css';
import Brand from './Components/Brand';
import Features from './Components/Features';
import Header from './Components/Header';
import WhatIsGPT3 from './Components/WhatIsGPT3';

function App() {
  return (
    <div className="App bg-bg">
      <Header/>
      <Brand/>
      <WhatIsGPT3/>
      <Features/>
    </div>
  );
}

export default App;
