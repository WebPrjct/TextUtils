import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className={`container-fluid navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">
          {props.tittle}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                {props.homeName}
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled">Contact</a>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" 
              onClick={props.ToggleMode}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {props.switchText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//To declare the type of props
Navbar.propTypes = { tittle: PropTypes.string, homeName: PropTypes.string };

//default props

Navbar.defaultProps = {
  tittle: "deafultTittle",
  homeName: "defaultHomeName",
};
