import React from "react";
import { NavLink } from "react-router-dom";
import { NavOptions } from "./NavOptions";


export const WideScreenNavBar = () => {
    const centerItem = (
        <NavLink className="site-logo" to={"/"}>
            <img src={require('../../media/aiw-logo.png')}/>
        </NavLink>
    )
    return (
        <nav className="wide-screen navbar">
            <NavOptions centerItem={centerItem}/>
        </nav>
    )
}