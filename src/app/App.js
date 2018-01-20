import React, { Component } from "react"
import Header from "../components/header"
import SearchBar from "../components/searchbar"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="section">
          <SearchBar
            className="searchbar"
            title="Recherchez votre médicament"
            placeholder="exemple : GAMMATETANOS"
          />
        </div>
      </div>
    )
  }
}

export default App
