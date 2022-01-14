import React, { useState, useEffect } from 'react'
import './Navbar.css'

import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [selectedOption, setOption] = useState(() => { return sessionStorage.getItem('Tab') || 'Home' });

    // To avoid return to the default navbar selection, we created an arrow function to handle the change in state and save in session storage 
    const handleOption = (option_selected) => { setOption(option_selected); sessionStorage.setItem('Tab', option_selected) };

    return (
        <div className='Navbar'>

            <div className='Logo'>
                <img src={Logo}></img>
            </div>

            <div className='Options'>
                <Link className='Option' to='/' onClick={() => handleOption('Home')} id={(selectedOption === 'Home') ? 'selected' : 'unselected'}>Home</Link>
                <Link className='Option' to='/Search' onClick={() => handleOption('Search')} id={(selectedOption === 'Search') ? 'selected' : 'unselected'}>Search</Link>
                <Link className='Option' to='/Settings' onClick={() => handleOption('Settings')} id={(selectedOption === 'Settings') ? 'selected' : 'unselected'}>Settings</Link>
            </div>

        </div>
    )
}

export default Navbar
