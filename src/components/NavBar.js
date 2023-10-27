import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <nav className="wide-screen navbar">
                <div className="brand-name">
                    <img src={require('../media/welding-man.png')}/>
                    <h1>Alfredo's</h1><h3>IRON WORK</h3>
                </div>
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