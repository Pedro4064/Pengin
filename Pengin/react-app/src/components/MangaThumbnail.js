import React from 'react'
import { Link } from 'react-router-dom'
import './MangaThumbnail.css'

function MangaThumbnail(props) {

    const notification = <div className='Notification'></div>
    return (
        <Link to={`/Manga/1/${props.id}`}>
            <div>
                {props.has_new && notification}
                < div className='MangaThumbnail' >

                    <img src={props.cover_url}></img>
                    {props.show_title && <div className='Label'>{props.title}</div>}

                </div>
            </div >
        </Link>
    )
}

export default MangaThumbnail
