import PCard from "../components/PCard"

function Projects( {projects} ){
    return (
        <div className="projectsPage">
            <div className="pheader">
                <h2>Projects</h2>
                <p>Some of my projects</p>
            </div>
            <div className="projectSection">
                {projects.map((project, i) => (
                    <PCard key={i} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects