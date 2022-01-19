import React from 'react';
import { useParams } from 'react-router-dom';

import './styles/Manga.css'

function Manga() {
    const { pluginId, mangaId } = useParams();

    return (
        <div>
            <div className='BackgroundImage'>
                <img id='cropped_image' src='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/5d0929ad-7ce8-4a0a-8d2b-785e310fb549.png'></img>
            </div>

            <div className='MangaInfo'>
                <h1>potato</h1>
            </div>
        </div>
    )
}

export default Manga
