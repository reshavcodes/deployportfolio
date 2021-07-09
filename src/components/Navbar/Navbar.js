import { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkTheme, setDarkTheme }) => {

    const [notExpanded, setNotExpanded] = useState(true);

    const handleToggle = () => {
        console.log(" Before " + notExpanded);
        if (notExpanded)
            setNotExpanded(false);
        else
            setNotExpanded(true);

        console.log(" After " + notExpanded);
    }

    const handleThemeSwitch = () => {
        if (!darkTheme) {
            setDarkTheme(true);
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "dark");
        }
        else {
            setDarkTheme(false);
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <div className={notExpanded ? "navbar" : "navbar expanded"}>
            <h1 className="logo">Reshav Kumar</h1>
            <button className="theme-switch-button" onClick={handleThemeSwitch}><FontAwesomeIcon icon={darkTheme ? faMoon : faSun} /></button>
            <button className="hamburger" onClick={handleToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path className="open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path className="close" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <ul className="menu">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    );
}

export default Navbar;