import React from "react";
import navImg from "./images/navbar.png";
import './navbar.css'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  // if(props.login === "true"){
  //   document.getElementById("navitem").style.display = "block";
  //   document.getElementById("navitem2").style.display = "block";
  // }
  // else if(props.login === "false"){
  //   document.getElementById("navitem").style.display = "none";
  //   document.getElementById("navitem2").style.display = "none";
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navImg} alt="ClickChat" height="35" width="35" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="navitem">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" id="navitem2">
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
