import React from "react"
import "./style.css"

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h1 className="title title--big">{props.drug.denomination}</h1>
      <span className="product-property">{props.drug.dose}</span>
      <img
        className="product-picture"
        src={props.drug.picture}
        alt={props.drug.name}
      />
      <h2 className="title title--big">DCI</h2>
      <span className="product-property">{props.drug.dci}</span>
      <h2 className="title title--big">Indications</h2>
      {renderListElem(props.drug.indications)}
      <h2 className="title title--big">Laboratoires</h2>
      <span className="product-property">{props.drug.titulaires[0]}</span>
      <h2 className="title title--big">Observations</h2>
      {renderListElem(props.drug.observations)}
    </div>
  )
}

function renderListElem(list) {
  if (!list) return
  return list.map((elem, index) => <li key={index}>{elem}</li>)
}

export default Sidebar
