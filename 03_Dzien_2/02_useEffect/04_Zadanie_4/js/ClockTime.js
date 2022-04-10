import React, { useState, useEffect } from "react";

const ClockTime = ({ time }) => {
    const [timeNow, setTime] = useState(time);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevState) => prevState.toLocaleTimeString());
        }, 1000);
    }, []);

    return <h1>{timeNow}</h1>;
};

export default ClockTime;
