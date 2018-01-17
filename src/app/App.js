import React, { Component } from "react"
import drugs from "../data/drugs.json"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(drugs.drugs[0])
  }

  render() {
    return <div className="App" />
  }
}

export default App
