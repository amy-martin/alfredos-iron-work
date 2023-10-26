
import React from "react";

export const WhyUsReasonTile = (props) => {
    const {imgSrc, reason, reasonExcerpt} = props.reason;
    return (
        <li>
            <div className="main-list-content"><img src={imgSrc}/><p className="reason-title">{reason}</p></div>
            <p className="reason-excerpt">{reasonExcerpt}</p>
        </li>
    )
}