import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

function SearchBar({ search, setSearch }) {

    const [partialSearch, setPartialSearch] = useState(search);

    return (
        <div className='SearchBar'>

            <div className='SearchIcon' onClick={() => setSearch(partialSearch)}>
                <BiSearch color='#F2E7DC' />
            </div>

            <div className='SearchBox'>
                <form onInputCapture={(e) => { setPartialSearch(e.target.value) }} onSubmit={(e) => { e.preventDefault(); setSearch(e.target[0].value) }}>
                    <input name='Title' value={partialSearch} onInputCapture={(e) => { setPartialSearch(e.target.value) }} placeholder='Title...'></input>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
