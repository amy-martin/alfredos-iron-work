
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const navSidebarSlice = createSlice({
    name: 'navSidebar',
    initialState: {
        display: null
    },
    reducers: {
        toggleSidebarDisplay: state => {
            if (!state.display || state.display === 'none') {
            
                state.display = 'flex'
            } else if (state.display === 'flex') {
                state.display = 'none'
            }
        },
        turnOffDisplay: state => {
            state.display = 'none'
        }
    }
})

export const {toggleSidebarDisplay, turnOffDisplay} = navSidebarSlice.actions;
export const selectNavSidebarDisplay = state => state.navSidebar.display;
export default navSidebarSlice.reducer