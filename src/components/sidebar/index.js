import React from "react"
import placeHolder from "../../assets/images/placeholder.svg"
import "./style.css"

const Sidebar = props => {
  return (
    <div className="sidebar">
      {props.drug && (
        <div className="sidebar-inner">
          <h1 className="title title--big">{props.drug.denomination}</h1>
          <span className="product-property">{props.drug.dose}</span>
          <div className="picture-frame">
            <img
              className="product-picture"
              src={placeHolder}
              alt={props.drug.name}
            />
          </div>
          <h2 className="title title--big">Présentation</h2>
          <span className="product-property">
            {props.drug.presentations[0].libelle}
          </span>
          <h2 className="title title--big">Voies d'administration</h2>
          {renderListElem(props.drug.voiesAdministration)}
          <h2 className="title title--big">Conditions de préscription</h2>
          {renderListElem(props.drug.conditionsPrescriptionDelivrance)}
          <h2 className="title title--big">Laboratoire</h2>
          <span className="product-property">{props.drug.titulaires[0]}</span>
        </div>
      )}
    </div>
  )
}

function renderListElem(list) {
  if (!list) return
  return list.map((elem, index) => <li key={index}>{elem}</li>)
}

export default Sidebar
