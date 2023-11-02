import React from "react";
import { EstimateInquiryForm } from "./EstimateInquiryForm";


export const EstimateInquiry = () => {
    return (
        <div className="estimate-inquiry">
            <h2>CONTACT US FOR YOUR FREE ESTIMATE</h2>
            <h4>We offer complimentary estimates within the San Fernando Valley and Los Angeles region. Please fill out the form below in order to have one of our associates contact you to schedule your visit.</h4>
            <EstimateInquiryForm />
        </div>
    )
}