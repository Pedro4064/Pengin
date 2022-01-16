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
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/0c44cf39-3d6c-4472-815b-9e163613cfe9/5d0929ad-7ce8-4a0a-8d2b-785e310fb549.png.512.jpg' title='My Wish Is To Fall In Love Until You Die' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/aa6c76f7-5f5f-46b6-a800-911145f81b9b/db3545a4-0e9b-483a-96df-d643244f40a3.jpg.512.jpg' title='My Dress-Up Darling' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/195023bf-cf9a-4772-94ef-09dd6eddea84/61eaa1da-050f-43b7-a8bb-5126a77aac7d.jpg.512.jpg' title="The Ancient Magus' Bride" has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/020d602f-c43a-4b9f-a4f8-3ac8ddfd99c3/9258433e-9c7c-4faa-b900-7422357ab818.jpg.512.jpg' title='Please Spoil Me, Hinamori-san!' has_new={false} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/a25e46ec-30f7-4db6-89df-cacbc1d9a900/a6838b90-fa2b-4228-9650-3adab0961747.jpg.512.jpg' title='Horimiya' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/65263bf9-4f87-4513-b72f-ad6436b3911c/b7f78e11-c910-48bb-a842-798e04f0f92f.jpg.512.jpg' title='Wotaku ni Koi wa Muzukashii' has_new={true} />
                <MangaThumbnail cover_url='https://uploads.mangadex.org/covers/c52b2ce3-7f95-469c-96b0-479524fb7a1a/e59a3c65-e1b3-44e2-8604-c46689aea481.jpg.512.jpg' title='Jujutsu Kaisen' has_new={true} />
            </div>

        </div>
    )
}

export default MangaSection
