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
                <img className='Thumbnail' src='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/5d0929ad-7ce8-4a0a-8d2b-785e310fb549.png'></img>
                <div className='TextBox'>
                    <h1>My Wish is to Fall in Love Until You Die</h1>
                    <h2>Aono Nachi</h2>
                </div>
            </div>
        </div>
    )
}

export default Manga
