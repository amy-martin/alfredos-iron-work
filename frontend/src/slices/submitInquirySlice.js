import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverAddress } from "../App";

export const sendEmail = createAsyncThunk('button/sendEmail', async(formData) => {

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
    name: 'inquiry',
    initialState: {
        emailStatus: 'idle',
        error: null,
        buttonDisplay: {
            loadingImgDisplay: 'none',
            textDisplay: 'flex',
            successTextDisplay: 'none',
            failureTextDisplay: 'none',
        }
    },
    reducers: {
        resetButton: state => {
            state.emailStatus = 'idle';
            state.buttonDisplay.loadingImgDisplay = 'none';
            state.buttonDisplay.textDisplay = 'flex';
            state.buttonDisplay.successTextDisplay= 'none';
            state.buttonDisplay.failureTextDisplay = 'none';
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendEmail.pending, (state, action) => {
                state.emailStatus = 'loading';
                state.buttonDisplay.loadingImgDisplay = 'flex';
                state.buttonDisplay.textDisplay = 'none';
            })
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.emailStatus = 'fulfilled';
                state.buttonDisplay.loadingImgDisplay = 'none';
                state.buttonDisplay.successTextDisplay = 'flex';
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.emailStatus = 'failed';
                state.error = action.error.message;
                state.buttonDisplay.failureTextDisplay = 'flex';
                state.buttonDisplay.textDisplay = 'none';
                state.buttonDisplay.loadingImgDisplay = 'none';
            })
    }
});

  

export const {resetButton} = submitInquirySlice.actions;
export const selectButtonDisplay = state => state.inquiry.buttonDisplay;
export const selectEmailStatus = state => state.inquiry.emailStatus
export default submitInquirySlice.reducer
