import React from "react";

export const EstimateInquiryForm = () => {
    return (
            <form className="estimate-inquiry-form" >
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
                        <label for='email'>Email:</label>
                        <input type='email' name='email' id='email' required></input>
                    </div>
                    <div className="form-element">
                        <label for='service'>Service Needed:</label>
                        <select type='text' name='service' id='service' required>
                            <option disabled selected value="">Select an option</option>
                            <option value="">Balcony</option>
                            <option value="">Railing</option>
                            <option value="">Gate/Fence</option>
                            <option value="">Grille/Security Bars</option>
                            <option value="">Furniture/Decorative</option>
                            <option value="">Signage</option>
                            <option value="">Landscape</option>
                            <option value="">Restoration/Repair</option>
                            <option value="">Custom/Other</option>
                        </select>
                    </div>
                    <div className="form-element">
                        <label for='additional-details'>Additional Details:</label>
                        <textarea type='text' name='additional-details' id='additional-details' rows='3' cols='50' required />
                    </div>
                </div>
                <button type="submit">Send Inquiry</button>
            </form>
)
}