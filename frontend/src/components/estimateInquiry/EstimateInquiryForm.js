import React, { useState } from "react";
import { serverAddress } from "../../App";
import { Flash } from "./flashComponents/Flash";
import { SubmitInquiryButton } from "./SubmitInquiryButton";
import { useDispatch } from "react-redux";
import { reset, sendEmail, setToLoading } from "../../slices/submitInquirySlice";
import { setFlash } from "../../slices/flashSlice";


export const EstimateInquiryForm = () => {
    const dispatch = useDispatch()
    // const [submitButtonContent, setSubmitButtonContent] = useState('Send Inquiry')
    // const [displayFlash, setDisplayFlash] = useState(false);
    // const [flashMessage, setFlashMessage] = useState()
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
        try {
            e.preventDefault();
            dispatch(sendEmail(formData))
        } catch (e) {
            throw e
        }
        

        //POSSIBLY ADD LOADING SCREEN MEANTIME EMAIL SENDS AND YOU GET A RESPONSE
    }

    // MAKE THE DUBMIT BUTTON ITS OWN COMPONENT
    return (
            <form className="estimate-inquiry-form" onSubmit={handleSubmit}>
                <div className="form-elements">
                    <div className="form-element">
                        <label htmlFor='name'>Full Name:</label>
                        <input type='text' name='name' id='name' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor='phone'>Phone:</label>
                        <input type="number" inputmode="numeric" pattern="[0-9]*" name='phone' id='phone' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' id='email' required onChange={handleChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor='service'>Service Needed:</label>
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
                        <label htmlFor='additional-details'>Additional Details:</label>
                        <textarea type='text' name='additionalDetails' id='additionalDetails' rows='3' cols='50' onChange={handleChange}/>
                    </div>
                </div>
                <Flash />
                <SubmitInquiryButton />
            </form>
)
}