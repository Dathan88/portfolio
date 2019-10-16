import React from "react"
import Img from "gatsby-image"
import { FaGithub, FaGamepad } from "react-icons/fa"

const Project = props => (
  <div className="projects">
    {props.projectProps.map((project, i) => {
      const myData = Object.keys(props.data)
      return (
        <div className="item" key={i}>
          <div
            href={project.href}
            id={project.imgId}
            onMouseOver={e =>
              (e.currentTarget.children[0].children[2].childNodes[0].srcset =
                project.gif)
            }
            onMouseOut={e =>
              (e.currentTarget.children[0].children[2].childNodes[0].srcset =
                props.data[myData[i]].childImageSharp.fluid.src)
            }
          >
            <Img
              alt={project.alt}
              fluid={props.data[myData[i]].childImageSharp.fluid}
            />
          </div>
          <a href={project.eyeLink} className={project.eyeClass}>
            <FaGamepad className={project.eyeIconClass} /> {project.eyeTitle}
          </a>
          <a href={project.hubLink} className={project.hubClass}>
            <FaGithub className={project.hubIconClass} /> {project.hubTitle}
          </a>
        </div>
      )
    })}
  </div>
)

export default Project
