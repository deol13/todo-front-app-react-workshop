import React, {useState} from 'react';
import { FaTachometerAlt, FaUsers, FaTasks, FaCog } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar col-2">
            <nav className="sidebar">
                <ul className="nav-menu-items">
                    <li ><a href="#Dashboard"><FaTachometerAlt /> Dashboard</a></li>
                    <li><a href="#Users"><FaUsers /> Users</a></li>
                    <li><a href="#Tasks"><FaTasks /> Tasks</a></li>
                    <li><a href="#Settings"><FaCog /> Settings</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;