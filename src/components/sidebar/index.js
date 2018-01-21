import React, { Component } from "react"
import "./style.css"

class Sidebar extends Component {

	render() {
		return (
			<div className="sidebar">
				<h1 className="title title--big">{this.props.drug.name}</h1>
				<span className="product-property">{this.props.drug.dose}</span>
				<h2 className="title title--big">DCI</h2>
				<span className="product-property">{this.props.drug.dci}</span>
				<h2 className="title title--big">Indications</h2>
				{this._renderListElem(this.props.drug.indications)}
				<h2 className="title title--big">Laboratoires</h2>
				<span className="product-property">{this.props.drug.laboratoire}</span>
				<h2 className="title title--big">Observations</h2>
				{this._renderListElem(this.props.drug.observations)}
			</div>
		)
	}

	_renderListElem(list) {
		return list.map((elem, index) => <li key={index}>{elem}</li>)
	}
}

export default Sidebar