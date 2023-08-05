import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
        <div className="social">
          <button  className="fa fa-facebook"></button>
          <button  className="fa fa-twitter"></button>
          <button  className="fa fa-google"></button>
          <button  className="fa fa-youtube"></button>
          <button  className="fa fa-instagram"></button>
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>
        <div className="cr">
          <p>
            NetMeds &copy;
          </p>
          <br/>
          <p>  
            &nbsp;all rights reserved to NetMeds.co
          </p>
        </div>
      </div>
  )
}
