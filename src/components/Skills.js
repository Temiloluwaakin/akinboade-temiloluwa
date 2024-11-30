import { TECHNOLOGIES } from "../data";

const Skills = () => {
    return ( 
        <div className="skills">
            <div className="skills-head">
                <h4>Skills</h4>
                <p>The skills, tools and technologies i am really good at:</p>
            </div>
            <div className="skills-list">
                {TECHNOLOGIES.map((tech) => (
                    <div className="tech-design" 
                        key={tech.label} 
                        onClick={() => window.open(tech.url, '_blank')}
                        style={{cursor:'pointer'}}
                    >
                        <img src={tech.logo} alt={tech.label} />
                        <p>{tech.label}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}
 
export default Skills;