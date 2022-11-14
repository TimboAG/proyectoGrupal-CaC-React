import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import "./cssLogin/csLogin.css";
import fondo from "../img/fondo.jpg";

function Login() {
  return (
    <div
      className="loginBody"
      style={{
        backgroundImage: `url(${fondo})`,
        opacity: 1,
      }}
    >
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Login;
