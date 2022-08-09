import React from "react";
import logo from "../../assets/images/LG.png";

const LogoContent = () => {
  return (
    <div className="logo-login-pages">
      <img src={logo} alt="" />

      <p className="title-logo-login">PRIVATE CLUB</p>
      <span className="sub-login-login">MEMBERS ONLY</span>
    </div>
  );
};

export default LogoContent;
