import React, {useState} from 'react';
import { ThemeContext, useTheme } from './ThemeContxt';
import { FaTachometerAlt, FaUsers, FaTasks, FaCog } from 'react-icons/fa';
import './Navbar.css';


const Navbar = (sidebarItems) => {
    const { theme, toggleTheme } = useTheme();

    // flex-md-column flex-row makes the navbar vertical on medium and larger screens, and horizontal on smaller screens.
    // d-flex makes the navbar a flex container, allowing for flexible layout.
    // align-items-center centers the items vertically in the navbar.
    return (
        <nav className={`sidebar col-md navbar-custom-${theme}`}>
            <div className='container'>
                
                <h2 className='nav-text '>My App</h2>
                <hr></hr>
                
            </div>
            <div className='container'>
                <ul className='nav nav-pills flex-md-column flex-row mb-auto '>
                    <li className='nav-item'>
                        <a href="#Dashboard" className='nav-link '><FaTachometerAlt /> Dashboard</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#Users" className='nav-link'><FaUsers /> Users</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#Tasks" className='nav-link'><FaTasks /> Tasks</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#Settings" className='nav-link'><FaCog /> Settings</a>
                    </li>
                </ul>
                <button className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} mb-3`} onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'dark' : 'light'} mode
                </button>
                
            </div>
        </nav>
    );
}

export default Navbar;