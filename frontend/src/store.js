import { configureStore } from "@reduxjs/toolkit";
import submitInquiryReducer from "./slices/submitInquirySlice";
import flashReducer from "./slices/flashSlice";
import navSidebarReducer from "./slices/navSidebarSlice";

const store = configureStore({
    reducer: {
        button: submitInquiryReducer,
        flash: flashReducer,
        navSidebar: navSidebarReducer
    }
})

export default store