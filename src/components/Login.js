import React, { useState } from "react";
import './login.css';
import {Link} from 'react-router-dom'
import axios from "axios";



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
  
    <div className="container my-5">
      <form >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={emailChangeHandler} placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" value={pwd} onChange={pwdChangeHandler} placeholder="Password"/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-2 text-center" onClick={loginSubmit}>Submit</button><br />
          <small><Link to="/register">Click here to register</Link></small>
        </div>
      </form>
    </div>
  );
}
