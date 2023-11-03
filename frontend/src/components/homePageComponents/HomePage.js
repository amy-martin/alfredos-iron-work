import React from "react";
import { WhyUs } from "./whyUsComponents/WhyUs";
import { EstimateInquiry } from "../estimateInquiry/EstimateInquiry";

export const HomePage = () => {

    const estimateFormDescription = (
        <div className="estimate-discription">
            <h2>CONTACT US FOR YOUR FREE ESTIMATE</h2>
            <h4>We offer complimentary estimates within the San Fernando Valley and Los Angeles region. Please fill out the form below in order to have one of our associates contact you to schedule your visit.</h4>
        </div>
    )
    return (
        <div className="home-page components">
            <h2 className="home-page title">FORGING QUALITY IRON WORK FOR THE SAN FERNANDO VALLEY AND GREATER LOS ANGELES AREA SINCE 2004</h2>
            <div className="home-page secondary-components">
                <EstimateInquiry estimateFormDescription={estimateFormDescription}/>
                <WhyUs />
            </div>
        </div>
    )
}