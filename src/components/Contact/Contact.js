import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import ContactImage from '../../assets/images/Contact.svg'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1>Contact Me</h1>
            <div className="contact">
                <div className="contact__options" data-aos="fade-right" data-aos-duration="700">
                    <a href="mailto:reshavkumar34@gmail.com" target="_blank"><FontAwesomeIcon className="mail" icon={faEnvelope} /></a>

                    <a href="http://www.instagram.com/ayedubey" target="_blank"><FontAwesomeIcon className="facebook" icon={faInstagram} /></a>

                    <a href="https://www.linkedin.com/in/reshav-kumar-092a72207" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>

                    <a href="https://www.t.me/ayedubey" target="_blank"><FontAwesomeIcon className="telegram" icon={faTelegram} /></a>

                    <a href="https://www.github.com/reshavcodes" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                </div>
                <div className="contact__image" data-aos="fade-left" data-aos-duration="700">
                    <img src={ContactImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;