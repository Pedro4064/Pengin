import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import './MangaSearch.css'

function MangaSearch() {
    return (
        <div className='SearchResult'>
            <img src='https://uploads.mangadex.org/covers/195023bf-cf9a-4772-94ef-09dd6eddea84/61eaa1da-050f-43b7-a8bb-5126a77aac7d.jpg.512.jpg'></img>
            <div className='SummaryBox'>

                <div className='TitleBox'>
                    <h3>Komi-San</h3>
                    <button onClick={() => console.log('Check Manga Page')}> <IoIosArrowForward /> </button>
                </div>

                <div className='TagBox'>
                    <div className='Tag'>Comedy</div>
                    <div className='Tag'>Romance</div>
                    <div className='Tag'>Slice of Life</div>
                </div>

                <div className='Summary'>
                    Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole school sees her as the cold beauty that's out of their league, but Tadano Hitohito knows the truth: she's just really bad at communicating with others.

                    Komi-san, who wishes to fix this bad habit of hers, tries to improve it with the help of Tadano-kun by achieving her goal of having 100 friends.
                </div>


            </div>
        </div>
    )
}

export default MangaSearch
