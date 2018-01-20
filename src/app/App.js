import React, { Component } from "react"
import Header from "../components/header"
import Search from "../views/search"
import Result from "../views/result"
import dataDrugs from "../data/drugs.json"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugs: dataDrugs.drugs,
      currentDrug: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.currentDrug === "" &&
          <Search handleClick={this.handleClick} />
        }
        {this.state.currentDrug !== "" &&
          <Result drug={this.state.currentDrug} />
        }
      </div>
    )
  }
  handleClick(evt, index) {
    this.setState({ currentDrug: this.state.drugs[index] })
    console.log(this.state.currentDrug);
  }
}

export default App