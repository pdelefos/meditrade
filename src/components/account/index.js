import React from "react"
import picture from "../../assets/images/user-icon.png"
import "./style.css"

const Account = props => {
  return (
    <div className="account">
      <span className="title">{props.title}</span>
      <img className="picture" src={picture} alt="account logo" />
    </div>
  )
}

export default Account
