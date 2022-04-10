import React, { useState } from "react";

const ClockDate = ({today}) => {
    const [date, setDate] = useState(today.toDateString());
    return <h1>{date}</h1>;
};

export default ClockDate;
