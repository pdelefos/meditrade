import React, { Component } from "react"
import Sidebar from "../../components/sidebar"
import SearchBar from "../../components/searchbar"
import ResultList from "../../components/resultlist"
import dataProducts from "../../data/products.json"
import "./style.css"

class Result extends Component {
  render() {
    return (
      <div className="flex-container">
        <Sidebar drug={this.props.drug} />
        <div className="resultview">
          <SearchBar handleClick={this.props.handleClick} />
          <ResultList
            results={dataProducts.products.filter(
              p => p.drugId === this.props.drug.id
            )}
          />
        </div>
      </div>
    )
  }
}

export default Result
