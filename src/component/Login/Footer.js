import React from 'react'

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
        </div>
    )
}

export default Footer
