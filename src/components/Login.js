import React, { useState } from "react";
import './login.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import navImg from './images/navbar.png';
import loginbg from './images/login-bg.png';


export default function Login() {

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  function emailChangeHandler (event){
    setEmail(event.target.value)
  }

  function pwdChangeHandler(event){
    setPwd(event.target.value)
  }
  
  function loginSubmit(event){
    event.preventDefault();
    const data = {
      email : email,
      pwd : pwd
    }
    console.log(data);
  }
  return (
    <> 
    {/* navigation bar */}
    <nav className="navbar navbar-expand-sm navbar-dark">
        <Link className="navbar-brand" to="/login">
          <div className="brand my-2">
            <img src={navImg} alt="ClickChat" height="35" width="35" />
          </div>
        </Link>
          <div className="brand-name">
            <h2><b>ClickChat</b></h2>
            <p><b>Click once, Chat forever</b></p>
          </div>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/register"><p>Register</p></Link>
                </li>
            </ul>
        </div>
    </nav>
    <div className="bg-image">
      <img src={loginbg}/>
    </div>
    {/* main form */}
    <div className="container container-1 my-5">
      <div className="row">
        <div className="col text-left">
          <h3><b>Login</b></h3>
          <small>Welcome to ClickChat</small>
          <hr/>
        </div>
      </div>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={emailChangeHandler} placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" value={pwd} onChange={pwdChangeHandler} placeholder="Password"/>
        </div>
        <div className="text-center my-4">
          <button type="submit" className="btn btn-outline-primary my-2" onClick={loginSubmit}>Login ✓</button><br />
          <small className="fgt-pwd"><Link to="/forgotPwd">Forgot Your Password?</Link></small>
        </div>
      </form>
    </div>
    </>
  );
}
