import React, { Fragment } from "react"

const Jobs = props => (
  <Fragment>
    <div
      className={props.jobProps.class}
      key={props.position}
    >
      <h3>{props.jobProps.company}</h3>
      <h6>{props.jobProps.job}</h6>
      <p>{props.jobProps.summary}</p>
    </div>
  </Fragment>
)

export default Jobs
