import React from 'react'

function Coin(props) {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <img src={props.coin.image} alt="crypto" />
        <h1>{props.coin.name}</h1>
        <p className="coin-symbol">{props.coin.symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price">${props.coin.current_price}</p>
        <p className="coin-volume">${props.coin.market_cap.toLocaleString()}</p>
        
      </div>
      
    </div>
  )
}

export default Coin
