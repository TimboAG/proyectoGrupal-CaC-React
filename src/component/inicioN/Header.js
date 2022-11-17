import React from 'react'
import './cssInicioN/Style.css';
import logo from '../img/Logonetflix.png'


const Header = () => {
    return (
        <div>
            <ul className='navbarInicio'>
                <li>
                    <a href="https://reactjs.org">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                </li>
                <li > Series </li>
                <li> Peliculas </li>
                <li > Novedades populares </li>
                <li > Mi lista </li>
                <li > Explorar idiomas </li>
            </ul>
        </div>
    )
}

export default Header
