import React from 'react';
import { useParams } from 'react-router-dom';

import './styles/Manga.css'

function Manga() {
    const { pluginId, mangaId } = useParams();

    return (
        <div className='MangaPage'>
            {/* <div className='BackgroundImage'>
                <img src='https://uploads.mangadex.org/covers/0d545e62-d4cd-4e65-a65c-a5c46b794918/e4159693-18f3-472d-ba92-a1c96d32d36e.jpg'></img>
            </div> */}
            {/* <h1>{pluginId}</h1>
            <h1>{mangaId}</h1>
            <h2>POTATO</h2> */}

        </div>
    )
}

export default Manga
