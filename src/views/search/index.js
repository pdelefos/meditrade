import React from "react"
import SearchBar from "../../components/searchbar"
import "./style.css"

const Search = ({ handleSearch }) => {
  return (
    <div>
      <SearchBar
        className="searchbar"
        title="Recherchez un médicament"
        placeholder=""
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default Search
