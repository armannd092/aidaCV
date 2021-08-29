import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MyMap from './MyMap'

export default function Contact() {
    return(
        <>
            <h4 className='call-action'>Contact me!</h4>
            <div className='contain'>
                <div className="clm-left">
               
                </div>
                <div className="clm-Right">
                    <ul className="list">
                        <li className="list-item contacts">
                            <div className="contact-card">
                                <a className = "contact-icon" href="">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                                <div className="contact-info">
                                    <h6 className="contact-title">Phone</h6>
                                    <p className="contact-detail">+9899999999</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item contacts">
                            <div className="contact-card">
                                <a className = "contact-icon" href="">
                                    <FontAwesomeIcon icon={faEnvelope } />
                                </a>
                                <div className="contact-info">
                                    <h6 className="contact-title">Email</h6>
                                    <p className="contact-detail">Aida.ndj93@gmail.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item contacts">
                            <div className="contact-card">
                                <a className = "contact-icon" href="">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <div className="contact-info">
                                    <h6 className="contact-title">Linkedin</h6>
                                    <p className="contact-detail">aidaNajari</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}