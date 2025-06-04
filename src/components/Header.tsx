import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Braga Municipality</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;