import React from "react"
import MenuList from "./Menu-List"

const Menu = (props) => (
  <nav className={"menu " + props.className}>
      <div className={"menu-branding " + props.className}>
        <div className="portriat" />
      </div>
        <MenuList className={props.className}/>
    </nav>
)

export default Menu;