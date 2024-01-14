import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleSidebarDisplay, selectNavSidebarDisplay} from '../../slices/navSidebarSlice'
import { NavLink } from "react-router-dom";


export const NarrowScreenNavBar = () => {
    const sidebarDisplay = useSelector(selectNavSidebarDisplay)
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        console.log(sidebarDisplay === 'flex')
        if (sidebarDisplay === 'flex') {
            console.log(sidebarDisplay)
            
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [sidebarDisplay])
    const handleClick = () => {
        dispatch(toggleSidebarDisplay());
    }
    return (
        <nav className="narrow-screen navbar" >
            <NavLink  to={"/"}><img className="site-logo"src={require('../../media/aiw-logo-small.png')}/></NavLink>
            <div className={`sidebar-icon-container ${isActive ? "active" : ""}`} onClick={handleClick}>
                <div className="sidebar-icon">

                        <hr className="line-1"/>

                        <hr className="line-2"/>

                        <hr className="line-3"/>
                </div>
            </div>
        </nav>
    )
}