import React from "react"
import placeholder from "../../assets/images/placeholder.svg"
import "./style.css"

const Result = ({ product, handleClick }) => {
  return (
    <li
      className="result-item"
      onClick={evt => {
        handleClick(evt, product.codeCIS)
      }}
    >
      <div className="picture">
        <img src={placeholder} alt="" />
      </div>
      <div className="info">
        <span className="info__name">{product.denomination}</span>
        <span className="info__seller">Pharmacie en region parisienne</span>
      </div>
      <div className="quantity">XX</div>
      <div className="price">XX €</div>
      <div className="delay">XX H</div>
      <div />
    </li>
  )
}

export default Result
