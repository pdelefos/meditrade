import React, { Component } from "react"
import Result from "../result"
import "./style.css"

const ResultList = props => {
  return (
    <div className="list-results">
      <span>
        {props.results.length === 0
          ? "Aucun résultat pour cette recherche"
          : props.results.length + " résultats"}
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
