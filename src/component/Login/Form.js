import React from 'react'

function Form() {
    return (
        <div>
            <h1> Inicia sesión </h1>
            <div className='loginInput'>
                <input type='email' className='loginEmail' placeholder='Email o número de telefono' />
                <input type='password' className="loginPass"
                    placeholder='Contraseña' />
                <p className='loginError'></p>
                <button className='loginButton'>Iniciar Sesión</button>
                <div className='login__child'>
                    <label>
                        <input type='checkbox' className='loginCheckbox' />
                        Recuérdame
                    </label>
                    <div><a className='loginHelp' href='https://reactjs.org'>¿Necesitas ayuda?</a></div>
                </div>
            </div>
        </div>
    )
}

export default Form
