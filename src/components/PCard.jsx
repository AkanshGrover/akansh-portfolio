import { FaGithub } from "react-icons/fa";

function PCard( {project} ){
    return (
        <div className="PCard">
            <div className="projectHeader">
                <h3>{project.name}</h3>
                <div className="projectIcons">
                    <a href={project.gitl}><FaGithub/></a>
                </div>
            </div>
            <p>{project.desc}</p>
            <div className="projectTechs">
                {project.tech.map((tech, i) => (
                    <div key={i} className="projectTechChip">{tech}</div>
                ))}
            </div>
        </div>
    )
}

export default PCard