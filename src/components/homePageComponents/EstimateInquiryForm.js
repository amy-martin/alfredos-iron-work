import React from "react";

export const EstimateInquiryForm = () => {
    return (
        <div className="estimate-inquiry">
            <h2>CONTACT US FOR YOUR FREE ESTIMATE</h2>
            <h4>We offer complimentary estimates within the San Fernando Valley and Los Angeles region.</h4>
            <form className="estimate-inquiry-form">
                <div className="form-elements">
                    <div className="form-element">
                        <label for='name'>Full Name:</label>
                        <input type='text' name='name' id='name' required></input>
                    </div>
                    <div className="form-element">
                        <label for='phone'>Phone:</label>
                        <input type='tel' name='phone' id='phone' required></input>
                    </div>
                    <div className="form-element">
                        <label for='service'>Service Needed:</label>
                        <select type='text' name='service' id='service' required></select>
                    </div>
                </div>
            </form>
        </div>
)
}