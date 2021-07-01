import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../assets/cube.png'

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src={Logo} alt="logo"></img>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
        </div>
    </div>
)

export default Header