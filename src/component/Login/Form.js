import React, { useState } from "react";
import { TextField, Checkbox, Container } from "@material-ui/core";

function Form() {

  const [mas, setMas] = useState(false);

  const mostrar = () => {
    setMas(!mas);
  }

  const miEstilo = () => {
    return {
      display: mas ? 'block' : 'none',
    }
  }

  const miEstiloButton = () => {
    return {
      display: mas ?  'none': 'block',
    }
  }

  return (
    <Container fixed className="formLogin">

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
            <div className="texto">
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot
              <button onClick={() => mostrar()} className="buttoon1" style={miEstiloButton()}>
                Más info
              </button>
              <spam id="textButton" className="textButton" style={miEstilo()} >
                <p> La información recopilada por Google reCAPTCHA está sujeta a la &nbsp;
                  <a href="https://policies.google.com/privacy" className="policies">Política de privacidad</a>
                  &nbsp;y a las &nbsp;
                  <a href="https://policies.google.com/terms" className="policies">
                    Condiciones del servicio</a>&nbsp; de Google, y se utiliza para proporcionar,
                  mantener y mejorar el servicio de reCAPTCHA,
                  así como para fines generales de seguridad
                  (Google no la utiliza para personalizar publicidad).</p>
              </spam>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Form;
