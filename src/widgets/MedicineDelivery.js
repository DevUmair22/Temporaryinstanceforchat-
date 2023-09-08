import React from "react";

import Link from "./Link";

export default function () {
    const getUrl = () => {
        return `https://www.hpb.health.gov.lk/en/covid-19#:~:text=Delivery%20of%20medicine%20from%20hospital%20clinics`;
    };

    return (
        <Link url={getUrl()} title={"delivery of medicine from hospital clinics"} />
    );
};

