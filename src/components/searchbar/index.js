import React from "react"
import "./style.css"

const SearchBar = ({ title, placeholder, handleSearch }) => {
  return (
    <div className="searchbar">
      <h1 className="title title--big">{title}</h1>
      <input
        className="input input--text"
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar
