import React from "react";
import "../assets/css/login.css";
import logo from "../assets/images/logo2.png";

const Login = () => {
  return (
    <div className="body">
      <div className="left">
        <img
          src={logo}
          className="logo"
          alt="Logo"
          style={{ width: 350, height: 335 }}
        />
      </div>
      <div className="right">
        <div className="loginbox">
          <form>
            <label htmlFor="">Username</label>
            <br />
            <input type="text" id="" name="" placeholder="Enter Username" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" id="" name="" placeholder="Enter Password" />
            <br />
            <br />
            <input type="submit" value="Login" />
            <a href="/" className="guest">
              Join as a guest
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
