import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// import { ReactComponent as Logo } from '../../assets/cube.png'

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src="./cube.png" alt="logo"></img>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/content">C</Link>
        </div>
    </div>
)

export default Header