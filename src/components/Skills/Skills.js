import './Skills.css';


const map1="{";
const map2="}";
const Skills = () => {
    return (
        <div className="main">
            
        <ul className="s1"   data-aos="fade-up" data-aos-duration="800">
        <h2 className="s2">string mySkills[8]= <strong className="s9">{map1}</strong></h2>
        
        <li className="s3">Python, Javascript, C++, Dart.</li>

        <li className="s4">Web Development(MERN, Django, Flutter).</li>

        <li className="s5"  >Android developer(Flutter).</li>

        <li className="s6"  >Python Scripting.</li>

        <li className="s7">Machine Learning and AI.</li>
        
        <h1 className="s8"><strong>{map2}</strong></h1>
      </ul>
      </div>
    );
}

export default Skills;