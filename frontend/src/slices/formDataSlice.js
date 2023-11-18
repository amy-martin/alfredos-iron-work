import { createSlice } from "@reduxjs/toolkit";


const formDataSlice = createSlice({
    name:'formData',
    initialState: {
        name: '',
        phone: '',
        email: '',
        service: '',
        additionalDetails: '',
    },

    reducers: {
        changeInput: (state, action) => {
            const {name, value} = action.payload
            state[name] = value
        },
        resetInputs: (state) => {
            state.name = '';
            state.phone = '';
            state.email = '';
            state.service = '';
            state.additionalDetails = '';
        }
    }
});

export const {changeInput, resetInputs} = formDataSlice.actions;
export const selectFormData = state => state.formData;
export default formDataSlice.reducer