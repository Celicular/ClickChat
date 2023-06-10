import './register.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMob] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  function getCC(number) {
    const parts = number.split(' ');
    return parts[0];
  }
  

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function mobileIsValid(mob) {
    const mobileNumberPattern = /^\+\d{2}\s\d{10}$/;
    return mobileNumberPattern.test(mob);
  }
  
  function countryIsValid(country) {
    return country.trim() !== "";
  }
  
  function genderIsValid(gender) {
    return gender === "male" || gender === "female" || gender === "other";
  }
  function getFirstWord(sentence) {
    const words = sentence.trim().split(/[.\s]+/); 
    return words[0];
  }

  function registerSubmit(event) {
    event.preventDefault();
    let firstName = getFirstWord(name);
    let contCode = getCC(mobileNo);
    let data = {
      firstName : firstName,
      name : name,
      email : email,
      mobNo : mobileNo,
      countryCode : contCode,
      gender : gender, 
      country : country
    }
    if (!emailIsValid(data.email)) {
      alert("Invalid email address");
      return;
    }
    if (!mobileIsValid(data.mobNo)) {
      alert("Invalid mobile number");
      return;
    }
    if (!countryIsValid(data.country)) {
      alert("Invalid country");
      return;
    }
    if (!genderIsValid(data.gender)) {
      alert("Please select a gender");
      return;
    }

    console.log(data);
  }

  

  return (
    <>
      <div className="container my-5">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter your Email Address"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={(e)=>{
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile No</label>
            <input
              onChange={(e) => {
                setMob(e.target.value);
              }}
              type="tel"
              className="form-control"
              id="Mobile"
              placeholder="Enter your Mobile No"
            />
            <small id="mobileHelp" className="form-text text-muted">
              Write your phone number in this format ("+cc ----------") where "+cc" is your country code
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input mx-1"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={gender==="male"}
                onChange={() => {
                  setGender("male");
                }}
              />
              <label className="form-check-label mx-4" htmlFor="male">
                Male
              </label>
              <input
                className="form-check-input mx-1"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={gender==="female"}
                onChange={() => {
                  setGender("female");
                }}
              />
              <label className="form-check-label mx-4" htmlFor="female">
                Female
              </label>
              <input
                className="form-check-input mx-1"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={gender==="other"}
                onChange={() => {
                  setGender("other");
                }}
              />
              <label className="form-check-label mx-4" htmlFor="other">
                Other
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              onChange={(e)=>{
                setCountry(e.target.value);
              }}
              type="text"
              className="form-control"
              id="country"
              placeholder="Enter your Country"
            />
          </div>
          <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary my-2 text-center"
                onClick={registerSubmit}
              >
                Submit
              </button>
              <br />
              <small>
                <Link to="/login">Click here to login</Link>
              </small>
            </div>
        </form>
      </div>
    </>
  );
}
