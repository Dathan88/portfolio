import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaEye } from "react-icons/fa"

const Project = props => (
  <div className="projects">
    {props.projectProps.map((project, i) => {
      return (
        <div className="item" key={i}>
          <Link to={project.link}>
            <img id={project.imgId} src={project.src} alt={project.alt} />
          </Link>
          <Link to={project.eyeLink} className={project.eyeClass}>
            <FaEye className={project.eyeIconClass} /> {project.eyeTitle}
          </Link>
          <Link to={project.hubLink} className={project.hubClass}>
            <FaGithub className={project.hubIconClass} /> {project.hubTitle}
          </Link>
        </div>
      )
    })}
  </div>
)

export default Project
