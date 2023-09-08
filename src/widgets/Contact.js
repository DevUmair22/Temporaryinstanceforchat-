import React from "react";

import UrlIcon from "../assets/icons/call.svg";
export default function () {
    return (
        <a href="tel:1999" className="tel-link">
            <img className="url-icon" alt="CallIcon" src={UrlIcon} />
            <h1 className="tel-header"> Call 1999 </h1>
        </a>
    );
};

