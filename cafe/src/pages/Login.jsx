import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/login.css";
import logo from "../assets/images/newlogo.png";
import userImage from "../assets/images/login/profile.png";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    axios.post
  }

  return (
    <body>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="left">
          <img src={logo} alt="website logo" className="logo" />
          <p>CMPS271-Web Warriors &#169;</p>
        </div>
        <div className="login rounded">
          <div className="container">
            <img src={userImage} alt="user image" className="userImage" />
            <h2 className="mb-3">Welcome!</h2>
          </div>

          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassord(e.target.value)}
              ></input>
            </div>
            <div className="form-group form-check mb-2">
              <input type="checkbox" className="form-check-input"></input>
              <label htmlFor="check" className="form-check-label">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-success mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
