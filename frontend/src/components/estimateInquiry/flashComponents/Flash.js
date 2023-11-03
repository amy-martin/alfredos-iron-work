import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFlash } from '../../../slices/flashSlice';

export const Flash = (props) => {
    const flash = useSelector(selectFlash)
    const {display, message} = flash
    const [isDisplayed, setIsDisplayed] = useState(display);

    useEffect(() => {
        if (isDisplayed) {
        const timer = setTimeout(() => {
            setIsDisplayed(false);
        }, 3000);

        return () => clearTimeout(timer);
        }
    }, [isDisplayed]);

    return (
        <div className="flash" style={{display:{display}}}>
            <h3>{message}</h3>
        </div>
    );
};
