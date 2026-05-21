import ECard from "../components/ECard"
import persInfo from "../data/persInfo";

function Experience(){
    const exps = persInfo["exps"];
    const certs = persInfo["certs"];

    return (
        <div className="experiencePage">
            <div className="experienceHalf">
                <div className="eheader"><h2>Experience</h2></div>
                <div className="experienceSection">
                    {exps.map((exp, i) => (
                        <ECard key={i} info={exp}/>
                    ))}
                </div>
            </div>
            <div className="certificationHalf">
                <div className="eheader"><h2>Certifications</h2></div>
                <div className="certificationSection">
                    {certs.map((cert, i) => (
                        <ECard key={i} info={cert}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience