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
      currentDrug: ""//dataDrugs.drugs[1]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleReset = this.handleReset.bind(this)

  }
  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleReset} />
        {this.state.currentDrug === "" &&
          <Search handleClick={this.handleClick} />
        }
        {this.state.currentDrug !== "" &&
          <Result drug={this.state.currentDrug} handleClick={this.handleClick} />
        }
      </div>
    )
  }
  handleClick(evt, index) {
    this.setState({ currentDrug: this.state.drugs[index] })
    console.log(this.state.currentDrug);
  }
  handleReset() {
    this.setState({ currentDrug: "" })
  }
}

export default App