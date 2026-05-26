import PCard from "../components/PCard"

function Projects( {projectsInfo} ){
    const projects = projectsInfo.pdata;
    const lastUptd = projectsInfo.lastUpdated;
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
            <div className="lupdated">Last updated: {lastUptd} (IST)</div>
        </div>
    )
}

export default Projects