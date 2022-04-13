import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './CoinView.css'
// const icon = require('../../public/logo-gif.webp')
// import imgUrl from './logo-gif.webp'
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1&sparkline=false"

function CoinView() {
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
      <img width="50px" alt='logoimages' src={process.env.PUBLIC_URL + '/logo-gif.webp'}/>
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder='Search' className='coin-input' onChange={searchHandler} />
        </form>
      </div>
      <div className="coin-all">
        <ul className='ul-header'>
          <li className='name'>Name</li>
          <li className='symbol'>Symbol</li>
          <li className='price'>Price</li>
          <li className='volume'>Polume</li>
          <li className='percent'>Percent</li>
          <li className='market_cap'>Market_cap</li>
        </ul>
        <ul>
        {filteredCoins.map((coin, index)=> {
          return <li key={index}><Coin  coin={coin} /></li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default CoinView
