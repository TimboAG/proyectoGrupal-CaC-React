import React from "react";
import { TextField, Checkbox } from "@material-ui/core";

function Form() {
  const masInfo = () => {
    return (
      <p>
        La información recopilada por Google reCAPTCHA está sujeta a la Política
        de privacidad y a las Condiciones del servicio de Google, y se utiliza
        para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como
        para fines generales de seguridad (Google no la utiliza para
        personalizar publicidad).
      </p>
    );
  };
  return (
    <div className="formLogin">
      <h1 className="inicioLogin"> Inicia sesión </h1>
      <div>
        <TextField
          id="filled-basic"
          label="Email o número de telefono"
          variant="filled"
          type="email"
          className="loginInput"
        />

        <br></br>
        <br></br>

        <TextField
          id="filled-basic"
          label="Contraseña"
          variant="filled"
          type="password"
          className="loginInput"
        />

        <p className="loginError"></p>
        <button className="loginButton">Iniciar Sesión</button>
        <div className="login__child">
          <ul id="lista1">
            <li>
              <Checkbox defaultChecked className="loginCheckbox" />
              Recuérdame
            </li>
            <li>
              <a className="loginHelp" href="https://reactjs.org">
                ¿Necesitas ayuda?
              </a>
            </li>
          </ul>
          <div>
            <div>
              <ul id="lista1">
                <li>¿Primera vez en Netflix?</li>
                <li>
                  <a className="loginHelp" href="https://reactjs.org">
                    Suscríbete ahora.
                  </a>
                </li>
              </ul>
            </div>
            <div>
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot
              <button onClick={masInfo()} className="buttoon1">
                Más info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
