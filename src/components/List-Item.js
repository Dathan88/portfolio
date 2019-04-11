import React, { useState } from "react"
import { Link } from "gatsby"

const ListItem = () => {
  let [myPages, addPages] = useState([
    "Home",
    "About Me",
    "My Work",
    "Contact Info",
  ])
  let [myLinks, addLinks] = useState(["/", "about", "projects", "contact"])

  return (
    <div>
      {myPages.map((page, index) => {
        return (
          <li className="nav-item" key={index}>
            <Link to={myLinks[index]} activeClassName="nav-link">
              {page}
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default ListItem
