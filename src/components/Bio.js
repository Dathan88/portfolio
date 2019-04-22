import React, { Fragment } from "react"

const Bio = props => (
  <Fragment>
    <div
      className={props.bioProps.class}
      key={props.position}
    >
      <h3 className='text-secondary'>{props.bioProps.title}</h3>
      <p>{props.bioProps.summary}</p>
    </div>
  </Fragment>
)

export default Bio
