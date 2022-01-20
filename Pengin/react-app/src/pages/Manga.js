import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner'
import { get_manga_data } from '../api/mangadex';
import MangaThumbnail from '../components/MangaThumbnail';

import './styles/Manga.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Manga() {
    const { pluginId, mangaId } = useParams();

    const [mangaData, setMangaData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true);
        // console.log(mangaId, get_manga_data(mangaId));
        console.log('INFO LOADING');
        setMangaData(await get_manga_data(mangaId));
        console.log('INFO LOADED');
        setLoading(false);
    }, []);

    return (
        (!loading) ?
            <div className='Page'>

                <div className='BackgroundImage'>
                    {/* <img id='cropped_image' src='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/5d0929ad-7ce8-4a0a-8d2b-785e310fb549.png'></img> */}
                    <img id='cropped_image' src={mangaData['Manga info']['CoverUrl']}></img>
                    {/* {!loading && console.log(mangaData['Manga info']['CoverUrl'])} */}
                </div>

                <div className='MangaInfo'>
                    <img className='Thumbnail' src={mangaData['Manga info']['CoverUrl']}></img>
                    <div className='TextBox'>
                        <h1>{mangaData['Manga info']['Title']}</h1>
                        <h2>Aono Nachi</h2>
                        <div className='ActionButtons'>
                            <div id='AddReadingBtn' className='ActionBtn'>Add to Reading</div>
                            <div id='AddFavoriteBtn' className='ActionBtn'>★</div>
                        </div>
                    </div>
                </div>

                <div className='DividerLine'></div>

                <div className='MangaSummary'>

                    <p>{mangaData['Manga info']['Description']}</p>

                    <div className='TagGallery'>
                        {mangaData['Manga info']['Tags'].map((entry) => { return (<div className='Tag'>{entry}</div>) })}
                    </div>


                </div>
                <div className='VolumeGallery'>

                    {/* {mangaData['Volumes Data']} */}

                    <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/5d0929ad-7ce8-4a0a-8d2b-785e310fb549.png.512.jpg' title='Komi-san' has_new={true} />
                    <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/c374d778-0955-426e-9037-8756977ed80f.png.512.jpg' title='Komi-san' has_new={false} />
                    <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/898edaaf-c407-49e7-865d-bc17b34beea7.png.512.jpg' title='Komi-san' has_new={false} />
                    <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/1d308ddb-09bf-4c30-b845-a65bd444b6d4.png.512.jpg' title='Komi-san' has_new={false} />

                </div>
            </div>
            : <div id='loading_logo'><Rings id='loading_logo' color='#d97c2b' height={80} width={80} /> </div>
    )
}

export default Manga
