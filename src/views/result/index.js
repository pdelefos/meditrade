import React, { Component } from "react"
import Sidebar from "../../components/sidebar"
import dataProducts from "../../data/products.json"

class Result extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: dataProducts.products
		}
	}
	render() {
		return <div><Sidebar drug={this.props.drug} /></div>
	}
}

export default Result