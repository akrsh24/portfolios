import React from 'react';
import '../assets/style/NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to='/portfolio/' className="navbar-brand">
                    <span className="navbar-brand mb-0 h1">Akarsh</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/portfolio/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio/about' className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;


