import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1&sparkline=false"


function App() {

  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setcoins(res.data)
      })
  }, [])
  const searchHandler = (e) => {
    setsearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder='Search' className='coin-input' onChange={searchHandler} />
        </form>
      </div>
      <div className="coin-all">
        {filteredCoins.map(coin => {
          return <Coin key={coin.id} coin={coin} />
        })}
      </div>
    </div>
  );
}

export default App;
