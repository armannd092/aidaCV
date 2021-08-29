import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className = "footer-main">
            <footer>
                <div className = "footer-contact">
                    <a className = "footer-option" href="">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className = "footer-option" href="">
                        <FontAwesomeIcon icon={faWhatsapp } />
                    </a>
                    <a className = "footer-option" href="">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <p class="copyright">Aida Najari © 2021</p>
            </footer>
        </div>

    )
}