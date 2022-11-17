import React from 'react'
import Form from 'react-bootstrap/Form';
//import { FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <div className='loginFooter'>
            <div >
                <h5>¿Preguntas? Llama al 0800 345 1593</h5>
            </div>
            <ul className="footerLinks">
                <li className="footerLinkItem" >
                    <a className="footerLink" href="https://help.netflix.com/support/412">
                        Preguntas frecuentes
                    </a>
                </li>
                <li className="footerLinkItem" >
                    <a className="footerLink" href="https://help.netflix.com" >
                        Centro de ayuda
                    </a>
                </li>
                <li className="footerLinkItem">
                    <a className="footerLink" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
                        Términos de uso
                    </a>
                </li>
                <li className="footerLinkItem" >
                    <a className="footerLink" href="https://help.netflix.com/legal/privacy" >
                        Privacidad
                    </a>
                </li>
            </ul>


            <ul className="footerLinks">
                <li className="footerLinkItem" >
                    <a className="footerLink" href="https://reactjs.org" >
                        Preferencias de cookies
                    </a>
                </li>
                <li className="footerLinkItem" >
                    <a className="footerLink" href="https://help.netflix.com/legal/corpinfo" >
                        Información corporativa
                    </a>
                </li>
            </ul>
            <Form.Select aria-label="Default select example" className='selectFooter'>
                <option className='optionLang' value="1">Español</option>
                <option value="2">English</option>
            </Form.Select>
        </div>
    )
}

export default Footer
