import React, { useState } from 'react'
import './confirmRegister.css'

export default function ConfirmRegister() {
    let jsonData = (sessionStorage.getItem('temp'))
    let data = JSON.parse(jsonData);
    console.log(data)
    let name = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase() + ',';
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [age, setAge] = useState('')
    let finalData = {}

    function uploadData(){

    }

    function confirmRegistration(){
      if(password === confPassword){
        finalData = {
          ...data,
          age : age,
          password : password
          }
          let tempData = JSON.stringify(finalData);
          sessionStorage.setItem('temp', tempData); 
          uploadData();
      }
      else{
          alert("Confirm Password and Password dont match!")
      }
      
    }
  return (
    <>
<div className="container container-3">
  <div className="row">
    <div className="col">
      <h2 className="heading my-3">Hi {name}</h2>
      <small>Lets continue with the remaining details,</small>
    </div>
  </div>

  <form>
    <div className="row my-4">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control element"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
      </div>
        
      <div className="col">
        <div className="form-group">
          <label htmlFor="confPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control element"
            id="confPassword"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="confPassword">Age</label>
          <input
            type="number"
            className="form-control element"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>
      </div>
    </div>
    
  </form>
  <div className="submit">
    <button className="btn btn-outline-primary "onClick={confirmRegistration}>Confirm Registration</button>
  </div>
</div>
    </>
  )
}
