import React, { Fragment } from "react"
import SecondaryText from "./SecondaryText"

const PageTitle = props => (
  <Fragment>
    <h1
      className="lg-heading"
      id={props.id}
      value={props.value}
      key={props.position}
    >
      {props.titleProps[0]} <SecondaryText>{props.titleProps[1]}</SecondaryText>
    </h1>
  </Fragment>
)

export default PageTitle
