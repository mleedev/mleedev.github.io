import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some basic styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-link">Home</Link>
            </div>
            <div className="navbar-right">
                <Link to="/projects" className="navbar-link">About</Link>
                <Link to="/resume" className="navbar-link">Resume</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;