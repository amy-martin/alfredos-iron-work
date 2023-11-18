import React from "react";
import { useSelector } from "react-redux";
import { selectButtonDisplay } from "../../slices/submitInquirySlice";

export const SubmitInquiryButton = () => {
    const buttonData = useSelector(selectButtonDisplay);
    const {loadingImgDisplay, textDisplay, successTextDisplay, failureTextDisplay} = buttonData


    return (
        <button type="submit">
            <p className ='normal-button' style={{display: `${textDisplay}`}}>Send Inquiry</p>
            <div className="loading-gif-container" style={{display: `${loadingImgDisplay}`}}><img className = 'loading-gif' src={require('../../media/loading.gif')}/></div>
            <p className = 'success-button' style={{display: `${successTextDisplay}`}}>Inquiry Sent!</p>
            <p className = 'failure-button' style={{display: `${failureTextDisplay}`}}>Failed to send. Please try again.</p>
        </button>
    )
}    
