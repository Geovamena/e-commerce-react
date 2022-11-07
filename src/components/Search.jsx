import React from 'react'
import '../styles/Search.css'

const Search = ({ actionOnchange }) => {
    return (
        <div className="search">
            <input id='searchInput' onChange={actionOnchange} type="text" />
            <button className='search__button'><i className="fi fi-rr-search"></i></button>
        </div>
    )
}

export default Search