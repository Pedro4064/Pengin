import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MangaSearch from '../components/MangaSearch'

import search_manga from '../api/mangadex';
import './styles/Search.css'

function Search() {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        setSearchResults(await search_manga(search));

    }, [search]);

    return (
        <div className='SearchPage'>
            <SearchBar search={search} setSearch={setSearch} />
            <div className='ResultsBox'>
                {/* {(searchResults.length != 0) ? console.log('OK:', searchResults.length, searchResults) : ''} */}
                {(searchResults.length > 0) ? searchResults.map((result) => { return <MangaSearch key={result['ID']} manga_data={result} /> }) : 'NOPE'}
                {/* {(searchResults.length != 0) ? console.log(searchResults) : 'foda'} */}
            </div>
        </div>
    )
}

export default Search
