import React, { useState } from "react";
import "../assets/css/login.css";
import logo from "../assets/images/logo2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);

    await fetch("https://aub-cafe-271.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password_: password,
      },
      cache: "default",
    })
      .then((data) => {
        console.log("Test");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <br />
            <input
              type="text"
              id="eamail"
              name=""
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              id="pwd"
              name=""
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button
              type="submit"
              // onClick={handleSubmit}
            >
              Login
            </button>
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
