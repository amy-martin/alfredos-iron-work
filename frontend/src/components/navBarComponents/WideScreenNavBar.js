import React from "react";
import { NavLink } from "react-router-dom";
import { NavOptions } from "./NavOptions";


export const WideScreenNavBar = () => {
    return (
        <nav className="wide-screen navbar">
            <div className="brand-name">
                <img src={require('../../media/welding-man.png')}/>
                <h1>Alfredo's</h1><h3>IRONWORK</h3>
            </div>
            <NavOptions />
        </nav>
    )
}