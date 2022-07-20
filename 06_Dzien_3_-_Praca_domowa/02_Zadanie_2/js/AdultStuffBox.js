import React, { useState } from "react";

const AdultStuffBox = ({ ageProp }) => {
    const [adult, setAdult] = useState("lorem ipsum, treść dla pełnoletnich");

    return <div>{ageProp < 18 ? null : adult}</div>;
};

export default AdultStuffBox;
