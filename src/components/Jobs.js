import React, { Fragment } from "react"

const Jobs = props => (
  <Fragment>
    <div className={props.skillProps.class} key={props.position}>
      <h3 className="skillTitle">{props.skillProps.info}</h3>
      {/* <h6>{props.jobProps.job}</h6> */}
      <p className="skillContent">{props.skillProps.summary}</p>
    </div>
  </Fragment>
)

export default Jobs
