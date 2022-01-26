import React from 'react'
import './MangaSection.css'
import MangaThumbnail from './MangaThumbnail'

function MangaSection({ section_name, mangas }) {
    return (
        <div className='MangaSection'>
            <div className='Divider'>
                <h3>{section_name}</h3>
                <div className='DividerLine'></div>
            </div>

            <div className='Gallery'>
                {console.log('DATA PASSED TO MANGA SECTION', mangas)}
                {mangas.map((entry) => { return <MangaThumbnail cover_url={entry['CoverUrl']} title={entry['Title']} has_new={true} id={entry['Id']} /> })}
            </div>

        </div>
    )
}

export default MangaSection
