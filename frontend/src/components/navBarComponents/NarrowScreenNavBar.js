import React from "react";

export const NarrowScreenNavBar = () => {
    return (
        <nav className="narrow-screen navbar" >
            <img src={require('../../media/aiw-logo.png')}/>
            <img className="sidebar-icon" src={require('../../media/sidebar-icon.png')}></img>
        </nav>
    )
}