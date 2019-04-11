import React, { useState } from "react"
import { Link } from "gatsby"

const MenuList = (props) => {
  const [myPages, addPages] = useState([
    "Home",
    "About Me",
    "My Work",
    "Contact Info",
  ])
  const [myLinks, addLinks] = useState(["/", "about", "projects", "contact"])

  return (
    <ul className={'menu-nav ' + props.className}>
      {myPages.map((page, index) => {
        return (
          <li className={"nav-item " + props.className} key={index}>
            <Link to={myLinks[index]} activeClassName="current" className="nav-link">
              {page}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuList