import React from "react";
import { serverAddress } from "../../App";
import { on } from "nodemailer/lib/xoauth2";

export const EstimateInquiryForm = () => {

    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        additionalDetails: '',
    });
    const handleChange = (e) => {
        // Update the state when form fields change
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const onSubmit = async () => {
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
            <form className="estimate-inquiry-form" onSubmit={onSubmit}>
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
                        <textarea type='text' name='additional-details' id='additional-details' rows='3' cols='50' required onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit">Send Inquiry</button>
            </form>
)
}