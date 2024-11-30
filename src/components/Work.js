import { PROJECTS } from "../data";
import backgroundOpen from './icons/new-page-icon.png'

const Work = () => {
    

    return ( 
        <div className="work">
            <div className="work-head">
                <h4>Work</h4>
                <p>Some of the noteworthy projects I have built:</p>
            </div>

            {PROJECTS.map((project, index) => (
                <div className={`card ${index % 2 === 0 ? "image-left" : "image-right"}`} key={index}>
                    <div className="project-image">
                        <a href={project.url}>
                        <img 
                            src={project.previewImage} 
                            alt="preview-alt" 
                            onClick={() => window.open(project.url, '_blank')}
                        /></a>
                    </div>
                    <div className="project-text">
                        <div className="project-text-dets">
                            <h3> {project.name} </h3>
                            <p>{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <div key={index} className='proj-tech'>
                                    <h> {technology} </h>
                                </div>
                            ))}<br/><br/>
                            <a href={project.url}>
                            <img 
                                href={project.url}
                                src={backgroundOpen} 
                                alt="open-background" 
                                onClick={() => window.open(project.url, '_blank')}
                                style={{cursor:'pointer'}}
                            /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Work;