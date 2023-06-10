import './register.css'
import React from 'react'

export default function Register() {
  // console.error
  return (
    <>
      <div className="container">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label Htmlfor="name">Full Name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter your full name"/>
  </div>
  <div class="form-group">
    <label Htmlfor="mobile">Mobile No</label>
    <input type="number" class="form-control" id="Mobile" placeholder="Enter your full name"/>
  </div>
  <div class="form-group">
    <label Htmlfor="mobile">Gender</label>
    <div class="form-check">
    <input class="form-check-input mx-1" type="radio" name="gender" id="male" value="male"/>
    <label class="form-check-label mx-4" htmlFor="male">
      Male
    </label>
    <input class="form-check-input mx-1" type="radio" name="gender" id="female" value="Female"/>
    <label class="form-check-label mx-4" htmlFor="female">
      Female
    </label>
    <input class="form-check-input mx-1" type="radio" name="gender" id="other" value="other" checked/>
    <label class="form-check-label mx-4" htmlFor="other">
      Other
    </label>
    </div>
  </div>
</form>
      </div>
    </>
  )
}
