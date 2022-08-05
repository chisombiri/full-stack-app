import React from "react";
import devIcon from "../../devicon.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-div ma3 mt0">
      <img className="logo" src={devIcon} alt="logo" />
    </div>
  );
};

export default Logo;
