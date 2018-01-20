import React, { Component } from "react"
import SearchBar from "../../components/searchbar"
import SearchList from "../../components/searchlist"

class Search extends Component {

	render() {
		return (
			<div>
				<div className="section">
					<SearchBar
						className="searchbar"
						title="Recherchez votre médicament"
						placeholder="exemple : CARBOCAINE"
						handleClick={this.props.handleClick}
					/>
				</div>
				<div className="section">
					<SearchList
						title="Médicaments les plus recherchés"
						handleClick={this.props.handleClick}
					/>
				</div>
			</div>
		)
	}
}

export default Search