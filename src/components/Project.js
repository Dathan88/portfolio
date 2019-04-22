import React from "react"
import { FaGithub, FaEye } from "react-icons/fa"

const Project = (props) => (
    <div className="projects">
        {props.projectProps.map((project, i) => {
            return(
                <div className="item" key={i}>
                    <a href={project.link}>
                        <img id={project.imgId} src={project.src} alt={project.alt}/>
                    </a>
                    <a href={project.eyeLink} className={project.eyeClass}>
                        <FaEye className={project.eyeIconClass} /> {project.eyeTitle}
                    </a>
                    <a href={project.hubLink} className={project.hubClass}>
                        <FaGithub className={project.hubIconClass} /> {project.hubTitle}
                    </a>
                </div>
            )
        })}
    </div>
)

export default Project;

