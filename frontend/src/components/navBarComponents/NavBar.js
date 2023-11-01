import React from "react";
import { NavLink } from "react-router-dom";
import { WideScreenNavBar } from "./WideScreenNavBar";
import { NarrowScreenNavBar } from "./NarrowScreenNavBar";

export const NavBar = () => {
    return (
        <header>
            <WideScreenNavBar />
            <NarrowScreenNavBar />
        </header>
    )
}