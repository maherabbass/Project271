import React, { useState } from "react";
import "../assets/css/login.css";
import logo from "../assets/images/logo2.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    const form = {
      email: email,
      password_: password,
    };

    await fetch(
      "https://project-271-cafe-backend.onrender.com/api/users/login",
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        cache: "default",
      }
    )
      .then((response) => response.json())
      .then(async (json) => {
        // console.log(json.token);
        await localStorage.setItem("token", json.token);
        console.log(localStorage.getItem("token"));
        navigate("/main");
      });

    // .then((data) => {
    //   localStorage.setItem("token", data.token);
    //   console.log(data);
    //   console.log("Test");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  return (
    // <div className="body">
    //   <div className="left">
    //     <img
    //       src={logo}
    //       className="logo"
    //       alt="Logo"
    //       style={{ width: 350, height: 335 }}
    //     />
    //   </div>
    //   <div className="right">
    //     <div className="loginbox">
    //       <form onSubmit={handleSubmit}>
    //         <label htmlFor="">Username</label>
    //         <br />
    //         <input
    //           type="text"
    //           id="eamail"
    //           name=""
    //           placeholder="Enter Email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <br />
    //         <label htmlFor="">Password</label>
    //         <br />
    //         <input
    //           type="password"
    //           id="pwd"
    //           name=""
    //           placeholder="Enter Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <br />
    //         <br />
    //         <button
    //           type="submit"
    //           // onClick={handleSubmit}
    //         >
    //           Login
    //         </button>
    //         <a href="/" className="guest">
    //           Join as a guest
    //         </a>
    //       </form>
    //     </div>
    //   </div>
    // </div>
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
          <form form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <br />
            <input
              type="text"
              id=""
              name=""
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              id=""
              name=""
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
