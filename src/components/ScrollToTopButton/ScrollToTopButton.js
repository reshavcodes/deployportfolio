import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ScrollToTopButton = () => {

    const [buttonVisible, setButtonVisible] = useState(false);

    const checkPageOffset = () => {
        if (!buttonVisible && window.pageYOffset > 400) {
            setButtonVisible(true);
        } else if (buttonVisible && window.pageYOffset <= 400) {
            setButtonVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }

    window.addEventListener('scroll', checkPageOffset);

    return (
        <div className="scroll__button">
            <button onClick={scrollToTop} style={{ display: buttonVisible ? 'inline' : 'none' }}><FontAwesomeIcon icon={faLongArrowAltUp} /></button>
        </div>
    );
}

export default ScrollToTopButton;