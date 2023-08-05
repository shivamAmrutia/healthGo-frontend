import React from 'react';
import { Link } from  'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top slide-in-left" id="nav">
      <div className="container-fluid">
        <div className="navbar-brand">NetMeds</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link ">About us</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
}
