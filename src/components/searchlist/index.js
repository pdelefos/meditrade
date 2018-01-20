import React, { Component } from "react"
import "./style.css"
import data from "../../data/drugs.json"

class SearchList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			drugs: data.drugs
		}

	}
	render() {
		return (
			<div className="searchlist">
				<h1 className="title title--big">{this.props.title}</h1>
				<ul className="list">
					{this.state.drugs.map((drug, index) =>
						<li key={index} className="item" onClick={evt => this.props.handleClick(evt, drug.id)} >{drug.name}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default SearchList