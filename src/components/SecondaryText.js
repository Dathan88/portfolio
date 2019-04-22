import React, { Fragment } from "react"

const SecondaryText = props => (
  <Fragment>
    <span
      className="text-secondary"
      id={props.id}
      value={props.value}
      key={props.position}
    >
      {props.children}
    </span>
  </Fragment>
)

export default SecondaryText
