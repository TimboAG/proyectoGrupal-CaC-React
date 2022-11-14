import React from 'react'
import logoN from '../img/Logonetflix.png'

function Header() {
  return (
    <div class="loginHeader">
      
      <a href="https://reactjs.org" class="Logo" >
        <img src={logoN} alt='logo'/>
      </a>
    </div>
  )
}

export default Header
