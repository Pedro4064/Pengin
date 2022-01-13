import React from 'react'
import './MangaThumbnail.css'

function MangaThumbnail(props) {

    const notification = <div className='Notification'></div>
    return (
        <div>
            {props.has_new && notification}
            < div className='MangaThumbnail' >

                <img src={props.cover_url}></img>
                <div className='Label'>{props.title}</div>

            </div>
        </div >
    )
}

export default MangaThumbnail
