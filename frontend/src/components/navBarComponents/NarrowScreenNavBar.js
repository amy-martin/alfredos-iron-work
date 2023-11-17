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
            <NavLink  to={"/"}><img className="site-logo"src={require('../../media/aiw-logo-small.png')}/></NavLink>
            <img className="sidebar-icon" src={require('../../media/sidebar-icon.png')} onClick={handleClick}/>
        </nav>
    )
}