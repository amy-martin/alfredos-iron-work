import React from "react";
import { EstimateInquiryForm } from "./EstimateInquiryForm";


export const EstimateInquiry = (props) => {
    const {estimateFormDescription} = props
    return (
        <div className="estimate-inquiry">
            {estimateFormDescription}
            <EstimateInquiryForm />
        </div>
    )
}