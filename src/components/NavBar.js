import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <nav className="wide-screen navbar">
                <img src={require('../media/aiw-logo.png')}/>
                <ul>
                    <li><NavLink>HOME</NavLink></li>
                    <li><NavLink>SERVICES</NavLink></li>
                    <li><NavLink>ABOUT US</NavLink></li>
                    <li><NavLink>CONTACT US</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}