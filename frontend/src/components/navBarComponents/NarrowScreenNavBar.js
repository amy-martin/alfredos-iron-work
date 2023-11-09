import React from "react";
import { useDispatch } from "react-redux";
import {toggleSidebarDisplay} from '../../slices/navSidebarSlice'
import { NavLink } from "react-router-dom";

export const NarrowScreenNavBar = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleSidebarDisplay());
    }
    return (
        <nav className="narrow-screen navbar" >
            <NavLink className="site-logo" to={"/"}><img src={require('../../media/aiw-logo.png')}/></NavLink>
            <img className="sidebar-icon" src={require('../../media/sidebar-icon.png')} onClick={handleClick}/>
        </nav>
    )
}