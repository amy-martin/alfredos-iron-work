import React, { useState } from "react";
import { serverAddress } from "../../App";


export const EstimateInquiryForm = () => {

    // HANDLE SUCCESS WITH FLASH MESAGE
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        additionalDetails: '',
    });
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                formData
            })
        }
        const response = await fetch(`${serverAddress}/submit-inquiry`, options);
        console.log(response)
    }
    return (
            <form className="estimate-inquiry-form" onSubmit={handleSubmit}>
                <div className="form-elements">
                    <div className="form-element">
                        <label for='name'>Full Name:</label>
                        <input type='text' name='name' id='name' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label for='phone'>Phone:</label>
                        <input type='tel' name='phone' id='phone' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label for='email'>Email:</label>
                        <input type='email' name='email' id='email' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label for='service'>Service Needed:</label>
                        <select type='text' name='service' id='service' required onChange={handleChange}>
                            <option disabled selected value="">Select an option</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Railing">Railing</option>
                            <option value="Gate/Fence">Gate/Fence</option>
                            <option value="Grille/Security Bars">Grille/Security Bars</option>
                            <option value="Furniture/Decorative">Furniture/Decorative</option>
                            <option value="Signage">Signage</option>
                            <option value="Landscape">Landscape</option>
                            <option value="Repair">Repair</option>
                            <option value="Custom/Other">Custom/Other</option>
                        </select>
                    </div>
                    <div className="form-element">
                        <label for='additional-details'>Additional Details:</label>
                        <textarea type='text' name='additionalDetails' id='additionalDetails' rows='3' cols='50' onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit">Send Inquiry</button>
            </form>
)
}