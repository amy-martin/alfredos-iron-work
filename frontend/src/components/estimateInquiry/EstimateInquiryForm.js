import React, { useEffect } from "react";
import { SubmitInquiryButton } from "./SubmitInquiryButton";
import { useDispatch, useSelector } from "react-redux";
import { resetButton, selectEmailStatus, sendEmail } from "../../slices/submitInquirySlice";
import { changeInput, resetInputs, selectFormData } from "../../slices/formDataSlice";


export const EstimateInquiryForm = () => {
    const dispatch = useDispatch()
    const emailStatus = useSelector(selectEmailStatus)
    const formData = useSelector(selectFormData)


    useEffect(() => {
        if (emailStatus === 'fulfilled') {
            dispatch(resetInputs())
        }
    }, [emailStatus]);

    useEffect(() => {
        let timer
        if (emailStatus === 'fulfilled' || emailStatus === 'failed') {
            timer = setTimeout(() => {
                dispatch(resetButton())
            }, 3000)
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    })

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target
        dispatch(changeInput({name, value}))
    };
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            dispatch(sendEmail(formData))
        } catch (e) {
            throw e
        }
        

    }

    return (
            <form className="estimate-inquiry-form" onSubmit={handleSubmit}>
                <div className="form-elements">
                    <div className="form-element">
                        <label htmlFor='name'>Full Name:</label>
                        <input type='text' name='name' id='name' required onChange={handleChange} value={formData.name}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor='phone'>Phone:</label>
                        <input type="number" inputMode="numeric" pattern="[0-9]*" name='phone' id='phone' required onChange={handleChange} value={formData.phone}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' required onChange={handleChange} value={formData.email}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor='service'>Service Needed:</label>
                        <select type='text' name='service' id='service' required onChange={handleChange} value={formData.service}>
                            <option disabled selected value="">Select an option</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Railing">Railing</option>
                            <option value="Door">Door</option>
                            <option value="Gate/Fence">Gate/Fence</option>
                            <option value="Grille/Security Bars">Grille/Security Bars</option>
                            <option value="Furniture/Decorative">Furniture/Decorative</option>
                            <option value="Landscape">Landscape</option>
                            <option value="Repair">Repair</option>
                            <option value="Custom/Other">Custom/Other</option>
                        </select>
                    </div>
                    <div className="form-element">
                        <label htmlFor='additional-details'>Additional Details:</label>
                        <textarea type='text' name='additionalDetails' id='additionalDetails' rows='3' cols='50' onChange={handleChange} value={formData.additionalDetails}/>
                    </div>
                </div>
                <SubmitInquiryButton />
            </form>
)
}