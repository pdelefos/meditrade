import React, { Component } from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import SearchBar from "../components/searchbar"
import ResultList from "../components/resultlist"
import axios from "axios"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      currentDrug: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="section">
          <Sidebar drug={this.state.currentDrug} />
          <div className="search-section">
            <SearchBar
              className="searchbar"
              title="Recherchez un médicament"
              placeholder=""
              handleSearch={this.handleSearch}
            />
            <ResultList
              results={this.state.results}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    )
  }

  handleSearch(evt) {
    const searchValue = evt.target.value
    if (searchValue === "") {
      this.setState({ results: [] })
      return
    }
    const apiMeds = "https://open-medicaments.fr/api/v1/medicaments?query="
    const apiMedInfos = "https://open-medicaments.fr/api/v1/medicaments/"

    const getMed = value =>
      axios.get(apiMeds + searchValue).then(res => res.data)
    const getMedInfo = codeCIS =>
      axios.get(apiMedInfos + codeCIS).then(res => res.data)

    getMed(searchValue).then(listCIS =>
      axios.all(listCIS.map(med => getMedInfo(med.codeCIS))).then(meds =>
        this.setState({
          results: meds
        })
      )
    )
  }

  handleClick(evt, codeCIS) {
    const apiMedInfos = "https://open-medicaments.fr/api/v1/medicaments/"
    const getMedInfo = codeCIS =>
      axios.get(apiMedInfos + codeCIS).then(res => res.data)
    getMedInfo(codeCIS).then(data => this.setState({ currentDrug: data }))
  }
}

export default App
