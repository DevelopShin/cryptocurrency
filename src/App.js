import './App.css';
import React, { useState, useEffect } from 'react';
import CoinView from './components/CoinView';
function App() {

  return (
    <CoinView basename={process.env.PUBLIC_URL}/>
  );
}

export default App;
