import React, { useState, useEffect } from 'react'
import './Navbar.css'

import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [selectedOption, setOption] = useState('Home');

    return (
        <div className='Navbar'>

            <div className='Logo'>
                <img src={Logo}></img>
            </div>

            <div className='Options'>
                <Link className='Option' to='/' onClick={() => setOption('Home')} id={(selectedOption === 'Home') ? 'selected' : 'unselected'}>Home</Link>
                <Link className='Option' to='/Queue' onClick={() => setOption('Queue')} id={(selectedOption === 'Queue') ? 'selected' : 'unselected'}>Queue</Link>
                <Link className='Option' to='/Settings' onClick={() => setOption('Settings')} id={(selectedOption === 'Settings') ? 'selected' : 'unselected'}>Settings</Link>
            </div>

        </div>
    )
}

export default Navbar
