import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../assets/css/cancel.css";
import card from "../assets/images/card.webp";

const Cancel = () => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    // navigate to /menu
    navigate("/menu");
  };
  return (
    <body className="cancelAll">
      <div className="cancelBody">
        <div className="textContainer">
          <h1>PAYMENT!</h1>
          <h3>cancelled&#10060;</h3>
        </div>

        <div className="imageContainer">
          <img src={card} alt="cancel image" className="cancelImage" />
        </div>
      </div>
      <button onClick={navigateToMenu}>Back to Menu</button>
    </body>
  );
};

export default Cancel;
