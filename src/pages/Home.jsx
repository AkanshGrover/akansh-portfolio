import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

import akanshPhoto from '../assets/akansh_photo.JPG'
import SkillChip from "../components/SkillChip";
import persInfo from "../data/persInfo";

function Home(){
    const desc = persInfo["about"];
    const skills = persInfo["skills"];
    return (
        <div className="homePage">
            <div className="heroLeft">
                <p className="smallHeading">I'm</p>
                <h1 className="myName">Akansh Grover</h1>
                <h2>Computer Science Engineer</h2>
                <p className="heroDesc">{desc}</p>
                <div className="skills">
                    {skills.map((skill, i) => (
                        <SkillChip key={i} skill={skill}/>
                    ))}
                </div>
                <div className="socials">
                    <a href="mailto:groverakansh@gmail.com"><FaEnvelope/>Email</a>
                    <a href="https://github.com/AkanshGrover"><FaGithub/>Github</a>
                    <a href="https://www.linkedin.com/in/akansh-grover"><FaLinkedin/>LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1bWfxtf-eswAc4FC2HADu1frQODnaPOTR/view?usp=sharing"><FaFile/>Resume</a>
                </div>
            </div>
            <div className="heroRight">
                <div className="imgCard">
                    <img src={akanshPhoto} alt="Akansh's photo"/>
                </div>
            </div>
        </div>
    )
}

export default Home