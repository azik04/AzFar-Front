import React from 'react';
import { NavLink, Link} from 'react-router-dom';

const Nav = () => {
    return (
    <header></header>
    <nav>
        <div className="navbar">
            <div className="nav_more">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="nav_logo">
                <img src="http://www.azfar.az/img/logo.png" alt=""  width="50px"/>
            </div>
            <div className="navbar_menu">
                <ul>
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Contact">Elage</NavLink></li>
                    <li><NavLink to="/Stadiums">Stadiums</NavLink></li>
                    <li><NavLink to="/Admin">Admin</NavLink></li>
                </ul>
            </div>
            <Link to="/LogIn" class="navbar_logIn">
                <i className="fa-solid fa-user"></i>
                <p>Log In</p>
            </Link>

        </div>
    </nav>
    );
}

export default Nav;
