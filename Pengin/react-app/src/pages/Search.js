import React from 'react'
import SearchBar from '../components/SearchBar'
import MangaSearch from '../components/MangaSearch'

import './styles/Search.css'

function Search() {
    return (
        <div className='SearchPage'>
            <SearchBar />
            <div className='ResultsBox'>
                <MangaSearch />
                <MangaSearch />
                <MangaSearch />
                <MangaSearch />
                <MangaSearch />
            </div>
        </div>
    )
}

export default Search
