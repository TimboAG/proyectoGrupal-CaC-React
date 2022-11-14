import React from "react";
import logoN from "../img/Logonetflix.png";
import "./cssLogin/csLogin.css";

function Header() {
  return (
    <div className="loginHeader">
      <a href="https://reactjs.org">
        <img src={logoN} alt="logo" className="logo" />
      </a>
    </div>
  );
}

export default Header;
