import React from 'react';
import './navbar.css';

const Navbar = ({price, items}) => (
    <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        <a className="navbar-brand" href="#">Books Cart</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <p className="items">Total Items: {items}</p>
                </li>
                <li className="nav-item">
                    <p className="productPrice">Total Price: {price}</p>
                </li>
                <li className="nav-item">
                    <i className="fa fa-shopping-cart"></i>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;