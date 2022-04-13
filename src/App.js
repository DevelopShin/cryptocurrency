import './App.css';
import React, { useState, useEffect } from 'react';
import CoinView from './components/CoinView';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <CoinView />
    
    </BrowserRouter>
  );
}

export default App;
