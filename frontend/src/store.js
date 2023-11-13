import { configureStore } from "@reduxjs/toolkit";
import submitInquiryReducer from "./slices/submitInquirySlice";
import flashReducer from "./slices/flashSlice";
import navSidebarReducer from "./slices/navSidebarSlice";
import galleryReducer from "./slices/gallerySlice";

const store = configureStore({
    reducer: {
        button: submitInquiryReducer,
        flash: flashReducer,
        navSidebar: navSidebarReducer,
        gallery: galleryReducer
    }
})

export default store