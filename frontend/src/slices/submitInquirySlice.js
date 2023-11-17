import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverAddress } from "../App";

export const sendEmail = createAsyncThunk('button/sendEmail', async(formData, thunkAPI) => {

    try {
        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                formData
            })
        }
        await fetch(`${serverAddress}/submit-inquiry`, options)
    } catch (e) {
        throw e
    }

}) 

const submitInquirySlice = createSlice({
    name: 'button',
    initialState: {
        status: 'idle',
        loadingImgDisplay: 'none',
        textDisplay: 'flex',
        successTextDisplay: 'none',
        failureTextDisplay: 'none',
        error: null
    },
    reducers: {
        resetButton: state => {
            state.status = 'idle';
            state.loadingImgDisplay = 'none';
            state.textDisplay = 'flex';
            state.successTextDisplay= 'none';
            state.failureTextDisplay = 'none';
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendEmail.pending, (state, action) => {
                state.status = 'loading';
                state.loadingImgDisplay = 'flex';
                state.textDisplay = 'none';
            })
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.loadingImgDisplay = 'none';
                state.successTextDisplay = 'flex';
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
                state.failureTextDisplay = 'flex';
                state.textDisplay = 'none';
                state.loadingImgDisplay = 'none';
            })
    }
});

  

export const {resetButton} = submitInquirySlice.actions;
export const selectButtonDisplay = state => state.button;
export default submitInquirySlice.reducer
