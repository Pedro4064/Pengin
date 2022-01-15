import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

function SearchBar() {

    const [partialSearch, setPartialSearch] = useState('');
    const [search, setSearch] = useState(''); //TODO: We are actually going to pass the search as props so the parent component can re-render when changed

    return (
        <div className='SearchBar'>

            <div className='SearchIcon' onClick={() => setSearch(partialSearch)}>
                <BiSearch color='#F2E7DC' />
            </div>

            <div className='SearchBox'>
                <form onInputCapture={(e) => { setPartialSearch(e.target.value) }} onSubmit={(e) => { e.preventDefault(); setSearch(e.target[0].value) }}>
                    <input name='Title' placeholder='Title...'></input>
                </form>
            </div>
            <h1>{search}</h1>
        </div>
    )
}

export default SearchBar
