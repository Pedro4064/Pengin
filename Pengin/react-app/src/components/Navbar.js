import React, { useState, useEffect } from 'react'
import './Navbar.css'

import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [selected_option, changeSelection] = useState('Home');

    return (
        <div className='Navbar'>

            <div className='Logo'>
                <img src={Logo}></img>
            </div>

            <div className='Options'>
                <Link className='Option' to='/' onClick={() => changeSelection('Home')} id={(selected_option == 'Home') ? 'selected' : 'unselected'}>Home</Link>
                <Link className='Option' to='/Queue' onClick={() => changeSelection('Queue')} id={(selected_option == 'Queue') ? 'selected' : 'unselected'}>Queue</Link>
                <Link className='Option' to='/Settings' onClick={() => changeSelection('Settings')} id={(selected_option == 'Settings') ? 'selected' : 'unselected'}>Settings</Link>
            </div>

        </div>
    )
}

export default Navbar
