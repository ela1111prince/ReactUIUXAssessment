import React from 'react'
import './styles.css'

function Footer() {
  return (
    <div>
        <section><footer className="top">
    
    <div className="links">
      <div>
        <h2>Market</h2>
        <a>Clothes</a>
        <a>Accessories</a>
        <a>Grocceries</a>
        <a>Electronis</a>
        <a>Marketplace</a>
      </div>
      <div>
        <h2>Action</h2>
        <a>Cart</a>
        <a>Register</a>
        <a>Pricing</a>
        <a>Wishlist</a>
        <a>Seller</a>
      </div>
    </div>
  </footer>
  <footer className="bottom">
    <div className="legal">
      <span> © 2023 All rights reserved </span>
      <a> License </a>
      <a> Terms </a>
      <a> Privacy </a>
    </div>
    <div className="links">
      <a className="fa-brands fa-github"></a>
      <a className="fa-brands fa-linkedin"></a>
      <a className="fa-brands fa-docker"></a>
    </div>
  </footer></section></div>
  )
}

export default Footer