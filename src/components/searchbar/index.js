import React, { Component } from "react"
import loupe from "../../assets/images/loupe-icon.png"
import data from "../../data/drugs.json"
import "./style.css"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "", drugs: data.drugs,
      suggestions: [],
      suggestionBoxVisible: false
    }
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
        <div className={(this.state.suggestionBoxVisible) ? "suggestion-box" : "suggestion-box suggestion-box--hidden"}>
          {this.state.suggestions.map((s, index) => {
            return this.highlightWord(s.name, this.state.value, index)
          }
          )}
        </div>
        <button className="button button--submit">
          <img className="search-logo" src={loupe} alt="rechercher" />
        </button>
      </div>
    )
  }

  highlightWord(word, substr, index) {
    substr = substr.toUpperCase()
    const indexStartSubstr = word.indexOf(substr)
    const startPart = word.substr(0, indexStartSubstr)
    const highlightedPart = <span className="item--highlighted">{substr}</span>
    const endPart = word.substr(indexStartSubstr + substr.length, word.length)
    return <span key={index} className="item">{startPart}{highlightedPart}{endPart}</span>
  }

  handleSearch(evt) {
    evt.preventDefault()
    this.setState({ value: evt.target.value })
    if (evt.target.value.length === 0) {
      this.setState({ suggestions: [], suggestionBoxVisible: false })
      return
    }
    this.setState({
      suggestions: this.state.drugs.filter(drug =>
        drug.name.toLowerCase().includes(evt.target.value.toLowerCase())
      ),
      suggestionBoxVisible: true
    })
  }
}

export default SearchBar
