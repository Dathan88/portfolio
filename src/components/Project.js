import React from "react"
import Img from "gatsby-image"
import { FaGithub, FaEye } from "react-icons/fa"

const Project = props => (
  <div className="projects">
    {props.projectProps.map((project, i) => {
      const myData = Object.keys(props.data)
      return (
        <div className="item" key={i}>
          <a href={project.href} id={project.imgId}>
            <Img
              alt={project.alt}
              fluid={props.data[myData[i]].childImageSharp.fluid}
            />
          </a>
          <a to={project.eyeLink} className={project.eyeClass}>
            <FaEye className={project.eyeIconClass} /> {project.eyeTitle}
          </a>
          <a to={project.hubLink} className={project.hubClass}>
            <FaGithub className={project.hubIconClass} /> {project.hubTitle}
          </a>
        </div>
      )
    })}
  </div>
)

export default Project
