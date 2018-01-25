import React from "react"
import Result from "../result"
import "./style.css"

const ResultList = props => {
  return (
    <div className="list-results">
      <span className="info-bar">
        <span className="number">
          {props.results.length === 0
            ? "Aucun résultat pour cette recherche"
            : props.results.length + " résultats"}
        </span>
        <span className="qte">Quantité</span>
        <span className="price">Prix</span>
        <span className="delay">Délais</span>
      </span>
      <ul>
        {props.results.map((res, index) => (
          <Result
            key={res.codeCIS}
            product={res}
            handleClick={props.handleClick}
          />
        ))}
      </ul>
    </div>
  )
}

export default ResultList
