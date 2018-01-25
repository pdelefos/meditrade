import React from "react"
import Account from "../account"
import Logo from "../logo"
import "./style.css"
// import logo from ''

const Header = props => {
  return (
    <div className="header">
      <Logo onClick={props.handleClick} />
      <Account title="Mon compte" />
    </div>
  )
}

export default Header
