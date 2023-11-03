import { createSlice } from "@reduxjs/toolkit";

export const flashSlice = createSlice({
    name: 'flash',
    initialState: {
        display: 'none',
        message: null
    },
    reducers: {
        setFlash: (state, action) => {
            state.display = 'flex';
            state.message = action.payload.message
        }
    }
});

export const {setFlash} = flashSlice.actions;
export const selectFlash = state => state.flash;
export default flashSlice.reducer