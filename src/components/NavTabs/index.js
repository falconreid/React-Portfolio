import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function NavTabs() {
  const location = useLocation();

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      
        <img
          src="./images/J-icon.png"
          width="25"
          height="25"
          alt="J"
          loading="lazy"
        />
        <a className="navbar-brand" href="/">
          Joel Terrell
        </a>

        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> 
       
      <div className="collapse navbar-collapse" id="navbarNav">
      
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
    
      
    </div>
  );
}

export default NavTabs;
