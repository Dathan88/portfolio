import React, { Fragment } from "react"

const SubTitle = props => (
  <Fragment>
    <h2
      className="sm-heading"
      id={props.id}
      value={props.value}
      key={props.position}
    >
      {props.subProps}
    </h2>
  </Fragment>
)

export default SubTitle
