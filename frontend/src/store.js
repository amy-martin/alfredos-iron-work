import { configureStore } from "@reduxjs/toolkit";
import submitInquiryReducer from "./slices/submitInquirySlice";
import flashReducer from "./slices/flashSlice";

const store = configureStore({
    reducer: {
        button: submitInquiryReducer,
        flash: flashReducer
    }
})

export default store