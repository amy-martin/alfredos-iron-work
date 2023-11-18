import { configureStore } from "@reduxjs/toolkit";
import submitInquiryReducer from "./slices/submitInquirySlice";
import navSidebarReducer from "./slices/navSidebarSlice";
import galleryReducer from "./slices/gallerySlice";
import formDataReducer from "./slices/formDataSlice";

const store = configureStore({
    reducer: {
        inquiry: submitInquiryReducer,
        navSidebar: navSidebarReducer,
        gallery: galleryReducer,
        formData: formDataReducer
    }
})

export default store