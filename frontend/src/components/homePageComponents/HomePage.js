import React from "react";
import { WhyUs } from "./whyUsComponents/WhyUs";
import { EstimateInquiry } from "../estimateInquiry/EstimateInquiry";

export const HomePage = () => {
    return (
        <div className="home-page components">
            <h3 className="home-page title">FORGING QUALITY IRON WORK FOR THE SAN FERNANDO VALLEY AND GREATER LOS ANGELES AREA SINCE 2004</h3>
            <div className="home-page secondary-components">
                <EstimateInquiry />
                <WhyUs />
            </div>
        </div>
    )
}