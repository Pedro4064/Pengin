import React, { useState, useEffect } from 'react'
import { Rings } from 'react-loader-spinner'
import SearchBar from '../components/SearchBar'
import MangaSearch from '../components/MangaSearch'
import useSessionStorage from '../hooks/useSessionStorage'

import search_manga from '../api/mangadex';
import './styles/Search.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Search() {
    const [search, setSearch] = useSessionStorage('searchItem', '');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true);
        setSearchResults(await search_manga(search));
        setLoading(false);

    }, [search]);

    return (
        <div className='SearchPage'>
            <SearchBar search={search} setSearch={setSearch} />

            {loading && <div id='loading_logo'><Rings id='loading_logo' color='#d97c2b' height={80} width={80} /> </div>}

            <div className='ResultsBox'>
                {!loading && (searchResults.length > 0) ? searchResults.map((result) => { return <MangaSearch key={result['ID']} manga_data={result} /> }) : ''}
            </div>

        </div>
    )
}

export default Search
