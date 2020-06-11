import React from 'react';
import '../assets/style/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div class="nav-container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to='/' class="navbar-brand">
                    <img src="/images/personal_dp.jpeg" width="30" height="30" alt="" loading="lazy" />
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <NavLink to='/' class="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/about' class="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;


