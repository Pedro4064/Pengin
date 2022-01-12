import React from 'react'
import './MangaSection.css'

function MangaSection(props) {
    return (
        <div className='MangaSection'>
            <div className='Divider'>
                <h3>{props.section_name}</h3>
                <div className='DividerLine'></div>
            </div>

        </div>
    )
}

export default MangaSection
