import './Intro.css';
import IntroImage from '../../assets/images/IntroImage.svg';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__text" data-aos="fade-up" data-aos-duration="1000">
                <h3>Hi There,</h3>
                <h1>I'm Reshav</h1>
                <p>I'm a final year engineering student, I love gaming and Coding stuff.</p>

            </div>
            <div className="intro__image" data-aos="fade-down" data-aos-duration="1000">
                <img src={IntroImage} alt="" />
            </div>
        </div>
    );
}

export default Intro;
