import React, { Component } from "react"
import Result from "../result"
import dataDrugs from "../../data/drugs.json"
import "./style.css"

class ResultList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			drugs: dataDrugs.drugs
		}
	}
	render() {
		console.log(this.props.results);
		if (this.props.results.length === 0)
			return <span>Aucun resultat pour cette recherche</span>
		return <ul>
			{this.props.results.map((res, index) => <Result key={index} delay={res.delay} price={res.unitPrice} />)}
		</ul>
	}
}

export default ResultList