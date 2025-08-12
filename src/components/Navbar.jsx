import React, {useState} from 'react';
import { FaTachometerAlt, FaUsers, FaTasks, FaCog } from 'react-icons/fa';
import './Navbar.css';


const Navbar = (sidebarItems) => {

    // flex-md-column flex-row makes the navbar vertical on medium and larger screens, and horizontal on smaller screens.
    // d-flex makes the navbar a flex container, allowing for flexible layout.
    // align-items-center centers the items vertically in the navbar.
    return (
        <div className='col-md-2 d-flex flex-md-column flex-row align-items-center'>
            <h2 className='nav-text '>My App</h2>
            <hr></hr>
            <ul className='nav nav-pills flex-md-column flex-row mb-auto'>
                <li className='nav-item'><a href="#Dashboard" className='nav-link nav-text'><FaTachometerAlt /> Dashboard</a></li>
                <li className='nav-item'><a href="#Users" className='nav-link nav-text'><FaUsers /> Users</a></li>
                <li className='nav-item'><a href="#Tasks" className='nav-link nav-text'><FaTasks /> Tasks</a></li>
                <li className='nav-item'><a href="#Settings" className='nav-link nav-text'><FaCog /> Settings</a></li>
            </ul>
        </div>
    );
}

export default Navbar;