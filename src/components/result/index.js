import React from "react"
import "./style.css"

const Result = props => {
	return (
		<li className="result-item">
			<span className="result__elem result__delay">
				{props.delay === 1 ? props.delay + "jour" : props.delay + "jours"}
			</span>
			<span className="result__elem result__price">{props.price}€</span>
			<span className="result__elem result__quantity"></span>
			<span className="result__elem result__buy"></span>
		</li>
	)
}

export default Result