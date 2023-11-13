import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { turnOffDisplay } from "../../slices/navSidebarSlice";


export const NavOptions = (props) => {
    const {centerItem} = props
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(turnOffDisplay())
    };

    return (
        <ul className="nav-options">
            <li className="nav-item"><NavLink to="/services" onClick={handleClick}>SERVICES</NavLink></li>
            <li className="nav-item"><NavLink to="/gallery" onClick={handleClick}>GALLERY</NavLink></li>
            {centerItem}
            <li className="nav-item"><NavLink to="/about-us" onClick={handleClick}>ABOUT US</NavLink></li>
            <li className="nav-item"><NavLink to="/contact-us" onClick={handleClick}>CONTACT US</NavLink></li>
        </ul>
    )
}