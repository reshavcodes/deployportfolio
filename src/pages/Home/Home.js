import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import Skills from '../../components/Skills/Skills';
import Project from '../../components/Project/Project';
import ProjectImage from '../../assets/images/ProjectImage.jpg';
import Contact from '../../components/Contact/Contact';
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useState } from 'react';

const Home = () => {

    const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    if (darkTheme)
        document.documentElement.setAttribute('data-theme', "dark");

    return (
        <div className="home">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className="sections">
                <Intro />
                <div>
                <Skills />
                <div id="projects" className="projects">
                    <div className="projects__heading">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects__cards">
                        {/* 1st project  */}
                        <Project image={ProjectImage} projectTitle="Blogle" projectDescription="A micro blogging web app made using Node, MongoDB and Expressjs." 
                        projectLink="https://bogleme.herokuapp.com/"
                        buttonText="Write your blog"/>
                        {/* 2nd project  */}
                        <Project image={ProjectImage} projectTitle="SMS Bomber" projectDescription="A sms bomber which sends lots of spam text messages to the target number.    
                        " 
                        projectLink="#"
                        buttonText="Still in development"/>

                        {/* 3rd project  */}
                        <Project image={ProjectImage} projectTitle="LinkCut" projectDescription="A link shortner web app made using node and expressjs as backend, bootstrap and little bit css as frontend while having mongoDB as database." 
                        projectLink="https://lcut.herokuapp.com/"
                        buttonText="Short links"/>
                        {/* 4th project  */}
                        <Project image={ProjectImage} projectTitle="Text Encoder" projectDescription="A telegram bot that encrypts and decrypts text messages." 
                        projectLink="http://www.t.me/textencodebot"
                        buttonText="Start Encryption"/>

                        {/* 5th project  */}
                        <Project image={ProjectImage} projectTitle="Checkout more on my GitHub" projectDescription="" 
                        projectLink="http://www.github.com/reshavcodes"
                        buttonText="Check them out"/>

                        
                    </div>
                </div>
                </div>
                <Contact />
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;