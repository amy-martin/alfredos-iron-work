import React from "react";
import { useDispatch } from "react-redux";
import {toggleSidebarDisplay} from '../../slices/navSidebarSlice'

export const NarrowScreenNavBar = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleSidebarDisplay());
    }
    return (
        <nav className="narrow-screen navbar" >
            <img src={require('../../media/aiw-logo.png')}/>
            <img className="sidebar-icon" src={require('../../media/sidebar-icon.png')} onClick={handleClick}/>
        </nav>
    )
}