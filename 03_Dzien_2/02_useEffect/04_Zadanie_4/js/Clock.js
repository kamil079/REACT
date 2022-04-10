import React, { useState, useEffect } from "react";
import ClockTime from "./ClockTime";

const Clock = () => {
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate((prevState) => (prevState = new Date()));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
            <>
                <ClockTime time={today.toLocaleTimeString()}/>
                <ClockTime time={today.toDateString()}/>
            </>                                                                                                                                                                                                                                                                                                                
        );
};

export default () => {
    return <Clock />;
};
