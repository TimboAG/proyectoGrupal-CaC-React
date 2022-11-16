import React from 'react'
import Form from 'react-bootstrap/Form';
import { FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <div className='loginFooter'>
            <div >
                <h5>¿Preguntas? Llama al 0800 345 1593</h5>
            </div>
            <ul class="footerLinks">
                <li class="footerLinkItem" >
                    <a class="footerLink" href="https://help.netflix.com/support/412">
                        Preguntas frecuentes
                    </a>
                </li>
                <li class="footerLinkItem" >
                    <a class="footerLink" href="https://help.netflix.com" >
                        Centro de ayuda
                    </a>
                </li>
                <li class="footerLinkItem">
                    <a class="footerLink" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
                        Términos de uso
                    </a>
                </li>
                <li class="footerLinkItem" >
                    <a class="footerLink" href="https://help.netflix.com/legal/privacy" >
                        Privacidad
                    </a>
                </li>
            </ul>


            <ul class="footerLinks">
                <li class="footerLinkItem" >
                    <a class="footerLink" href="https://reactjs.org" >
                        Preferencias de cookies
                    </a>
                </li>
                <li class="footerLinkItem" >
                    <a class="footerLink" href="https://help.netflix.com/legal/corpinfo" >
                        Información corporativa
                    </a>
                </li>
            </ul>
            <Form.Select aria-label="Default select example" className='selectFooter'> 
            <FaGlobe/> 
                <option className='optionLang' value="1">Español</option>
                <option value="2">English</option>
            </Form.Select>
        </div>
    )
}

export default Footer
