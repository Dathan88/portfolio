import React, { Fragment } from "react"
import { Link } from "gatsby"

const Bio = props => (
  <Fragment>
    <div className={props.bioProps.class} key={props.position}>
      <h3 className="text-secondary">{props.bioProps.title}</h3>
      <p>{props.bioProps.summary}</p>
      <p>
        {"I began teaching myself HTML5, CSS3 and JavaScript/ES6 with  "}
        <a href={"//www.theodinproject.com"} className="aboutMe-link">
          {"The Odin Project "}
        </a>
        {props.bioProps.summary2}
      </p>
      <p>
        {props.bioProps.summary3}
        {
          <Link to="contact" activeClassName="current" className="aboutMe-link">
            email me
          </Link>
        }
        {
          " if you're looking for someone to build your project or for a new addition to your team!"
        }
      </p>
    </div>
  </Fragment>
)

export default Bio
