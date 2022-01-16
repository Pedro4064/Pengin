import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import './MangaSearch.css'

function MangaSearch({ manga_data }) {
    return (
        <div className='SearchResult'>
            <img src={manga_data['CoverUrl']}></img>
            <div className='SummaryBox'>

                <div className='TitleBox'>
                    <h3>{manga_data['Title']}</h3>
                    <button onClick={() => console.log('Check Manga Page')}> <IoIosArrowForward /> </button>
                </div>

                <div className='TagBox'>
                    <div className='Tag'>Comedy</div>
                    <div className='Tag'>Romance</div>
                    <div className='Tag'>Slice of Life</div>
                </div>

                <div className='Summary'>{manga_data['Description']}</div>


            </div>
        </div>
    )
}

export default MangaSearch
