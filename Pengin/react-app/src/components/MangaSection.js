import React from 'react'
import './MangaSection.css'
import MangaThumbnail from './MangaThumbnail'

function MangaSection(props) {
    return (
        <div className='MangaSection'>
            <div className='Divider'>
                <h3>{props.section_name}</h3>
                <div className='DividerLine'></div>
            </div>

            <div className='Gallery'>
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/020d602f-c43a-4b9f-a4f8-3ac8ddfd99c3/9258433e-9c7c-4faa-b900-7422357ab818.jpg.512.jpg' title='Please Spoil Me, Hinamori-san!' has_new={false} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/11cbae12-ea42-4a9e-89c1-f9d515c7a936.png' title='Komi-san' has_new={true} />
            </div>

        </div>
    )
}

export default MangaSection
