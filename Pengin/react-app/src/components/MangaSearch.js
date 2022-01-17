import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import './MangaSearch.css'

function MangaSearch({ manga_data }) {

    /**
     * Slice the tags of a manga to a max of 4.
     * We need to do so because otherwise the result box would be too polluted and overflow with tags
     * 
     * @param {array} tags 
     * @returns A new array with the first n tags, n being a max of 4 tags
     */
    const slice_tags = (tags) => {
        const sliced_tags = tags.slice(0, Math.min(4, tags.length));
        return sliced_tags;
    };

    return (
        <div className='SearchResult'>
            <img src={manga_data['CoverUrl']}></img>
            <div className='SummaryBox'>

                <div className='TitleBox'>
                    <h3>{manga_data['Title']}</h3>
                    <button onClick={() => console.log('Check Manga Page')}> <IoIosArrowForward /> </button>
                </div>

                <div className='TagBox'>
                    {slice_tags(manga_data['Tags']).map((tag_name) => { return <div className='Tag'>{tag_name}</div> })}
                </div>

                <div className='Summary'>{manga_data['Description']}</div>


            </div>
        </div>
    )
}

export default MangaSearch
