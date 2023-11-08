import React, { useEffect, useState } from "react";
import { NavOptions } from "./NavOptions";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSidebarDisplay, turnOffDisplay } from "../../slices/navSidebarSlice";


export const NavSidebar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const dispatch = useDispatch()

    const handleSidebarExit = () => {
        dispatch(turnOffDisplay())
    }
    useEffect(() => {
        const handleWidthResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidthResize)

        if (screenWidth >  860) {
            dispatch(turnOffDisplay())
        }
    })

    const display = useSelector(selectNavSidebarDisplay)
    return (
        <div className="nav-sidebar sidebar-overlay" style={{display:`${display}`}}>
            <div className="sidebar-container" style={{display:`${display}`}} onMouseLeave={handleSidebarExit}>
                <NavOptions />
            </div>
        </div>
    )
}