
import React, { useState } from "react";

export const WhyUsReasonTile = (props) => {
    const {imgSrc, reason, reasonExcerpt} = props.reason;
    const [display, setDisplay] = useState('none')
    const handleClick = () => {
        setDisplay((display === 'none' ? 'flex': 'none'))
    }
    return (
        <li className='why-us-list-content' onClick={handleClick}>
            <div className="baseline-content"><div className="icon-container"><img src={imgSrc}/></div><p className="reason-title">{reason}</p></div>
            <p className="reason-excerpt" style={{display:`${display}`}}>{reasonExcerpt}</p>
        </li>
    )
}