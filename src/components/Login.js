import React, { useState } from "react";
import './login.css';




export default function Login() {
  function log(data){
    console.log(data);
  }
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  return (
      <div className="container">
        <div className="my-3">
          <input
            onChange={(event) => {
              setEmail(email + event.target.value);
              log(email);
            }}
            type="email"
            className="eml form-control my-3"
            id="email"
            value={email}
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => {
              setPwd(pwd + e.target.value);
              log(pwd);
            }}
            type="password"
            className="form-control my-3"
            id="password"
            value={pwd}
            placeholder="Enter Password"
          />
        </div>
      </div>
  );
}
