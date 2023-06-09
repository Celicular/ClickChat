import React from "react";
import navImg from "./images/navbar.png";
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navImg} alt="ClickChat" height="35" width="35" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
