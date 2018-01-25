import React, { Component } from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Search from "../views/search"
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
            <Search handleSearch={this.handleSearch} />
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

    const getMed = value => axios.get(apiMeds + searchValue + "&limit=100")
    const getMedInfo = codeCIS => axios.get(apiMedInfos + codeCIS)

    getMed(searchValue).then(res =>
      axios.all(res.data.map(data => getMedInfo(data.codeCIS))).then(res =>
        this.setState({
          results: res.map(res => res.data)
        })
      )
    )
  }

  handleClick(evt, codeCIS) {
    const apiMedInfos = "https://open-medicaments.fr/api/v1/medicaments/"
    const getMedInfo = codeCIS => axios.get(apiMedInfos + codeCIS)
    getMedInfo(codeCIS).then(res => this.setState({ currentDrug: res.data }))
  }
}

export default App
