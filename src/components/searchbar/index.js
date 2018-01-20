import React, { Component } from "react"
import loupe from "../../assets/images/loupe-icon.png"
import data from "../../data/drugs.json"
import "./style.css"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "", drugs: data.drugs }
    this.handleSearch = this.handleSearch.bind(this)
  }

  render() {
    return (
      <div className="searchbar">
        <h1 className="title title--big">{this.props.title}</h1>
        <input
          className="input input--text"
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleSearch}
        />
        <button className="button button--submit">
          <img className="search-logo" src={loupe} alt="rechercher" />
        </button>
      </div>
    )
  }

  handleSearch(evt) {
    evt.preventDefault()
    this.setState({ value: evt.target.value })
    if (evt.target.value.length == 0) return
    let drugsFiltered = this.state.drugs.filter(drug =>
      drug.name.toLowerCase().includes(evt.target.value.toLowerCase())
    )
    // drugsFiltered.drugs.map(drug => console.log(drug.name)).join(",")
    console.log("---------------------")
  }
}

export default SearchBar
