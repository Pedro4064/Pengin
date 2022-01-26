import React, { useEffect, useState } from 'react'
import { get_user_data } from '../api/pengin';
import { Rings } from 'react-loader-spinner'
import MangaSection from '../components/MangaSection'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles/Home.css"
import useMangaData from '../hooks/useMangaData';

function Home() {
    const [loading, setLoading] = useState(true);
    const [mangaData, setMangaData] = useMangaData({});

    useEffect(async () => {

        setLoading(true);
        var data = await get_user_data();
        console.log('USER DATA', data)

        await setMangaData(data);
        console.log('SAVED DATA', mangaData);

        setLoading(false);

    }, []);

    return (
        (loading) ? <div id='loading_logo'><Rings id='loading_logo' color='#d97c2b' height={80} width={80} /> </div> :
            <div>
                {!loading && <MangaSection section_name='Reading' mangas={mangaData} />}
                {!loading && <MangaSection section_name='Downloaded' mangas={mangaData} />}
            </div>
    )
}

export default Home
