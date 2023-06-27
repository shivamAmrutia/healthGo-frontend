import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
        <div className="social">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-google"></a>
          <a href="#" className="fa fa-youtube"></a>
          <a href="#" className="fa fa-instagram"></a>
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
