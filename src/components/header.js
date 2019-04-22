import PropTypes from "prop-types"
import React, {useState} from "react"
import Menu from "./Menu"

const Header = ({ siteTitle }) => {
  const [menuBtnClass, setMenuBtnClass] = useState('menu-btn show')
  const [menuItemsClass, setMenuItemsClass ] = useState('close')

  function toggleMenu() {
    console.log('clicked');
    if(menuItemsClass === 'close') {
      setMenuBtnClass('menu-btn close')
      setMenuItemsClass('show')
    } else {
      setMenuBtnClass('menu-btn show')
      setMenuItemsClass('close')
    }
  }

  return (
  <header>
    <div className={menuBtnClass} onClick={toggleMenu}>
      <div className={'btn-line' }/>
      <div className={'btn-line' }/>
      <div className={'btn-line' }/>
    </div>

    <Menu className={menuItemsClass} />
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
