import React from "react"
import Account from "../account"
import logo from "../../assets/images/logo-white.png"
import "./style.css"
// import logo from ''

const Header = props => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="meditrade-logo" />
      <Account title="MON COMPTE" />
    </div>
  )
}

export default Header
