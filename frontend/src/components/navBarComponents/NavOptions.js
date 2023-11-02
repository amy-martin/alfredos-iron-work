import React from "react";
import { NavLink } from "react-router-dom";


export const NavOptions = () => {
    return (
        <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/services">SERVICES</NavLink></li>
            <li><NavLink to="/about-us">ABOUT US</NavLink></li>
            <li><NavLink to="/contact-us">CONTACT US</NavLink></li>
        </ul>
    )
}