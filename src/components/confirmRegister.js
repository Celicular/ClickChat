import React, { useState } from 'react'
import './confirmRegister.css'
// import axios from 'axios';
// import {useNavigate } from 'react-router-dom';


export default function ConfirmRegister() {
    // const navigate = useNavigate();
    const jsonData = (sessionStorage.getItem('temp'));
    const data = JSON.parse(jsonData);
    const name = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase() + ',';
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('')

    const openDialog = (message) => {
      setDialogMessage(message)
      setIsDialogOpen(true);
      document.body.classList.add('overlay');
    }

    const closeDialog = () => {
      setIsDialogOpen(false);
      document.body.classList.remove('overlay');
    }

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [age, setAge] = useState('')
    let finalData = {}
    function uploadData() {
      let tempData = sessionStorage.getItem("temp");
      let newData = JSON.parse(tempData);
      fetch("http://localhost:80/components/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          let messageData = '';
          if(data === '0'){
            messageData = "Error while registering please try again"            
          }else{
            messageData = "Registration done";
          }
          openDialog(messageData);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error: " + error);
        });
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
    
<div className="container container-3 overlay">
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
{isDialogOpen && (
        <div className="dialog-overlay">
          <dialog className='regDia'open>
            <p>{dialogMessage}</p>
            <button onClick={closeDialog}>Ok</button>
          </dialog>
        </div>
      )}
    </>
  )
}
